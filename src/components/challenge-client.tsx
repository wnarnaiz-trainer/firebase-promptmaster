"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Dices, User, Loader2, ArrowRight, PartyPopper } from 'lucide-react';

import type { Persona, Challenge, SubmittedPrompt, ScorePromptOutput, LeaderboardEntry } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { submitPrompt } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { personas, challenges } from '@/lib/data';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Separator } from './ui/separator';

const promptSchema = z.object({
  prompt: z.string().min(10, 'Your prompt should be at least 10 characters long.'),
});

export function ChallengeClient() {
  const router = useRouter();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  const [screenName, setScreenName] = useLocalStorage<string>('screenName', 'Anonymous');
  const [userId, setUserId] = useLocalStorage<string>('userId', '');
  const [selectedPersona, setSelectedPersona] = useLocalStorage<Persona | null>('selectedPersona', null);
  const [submittedPrompts, setSubmittedPrompts] = useLocalStorage<SubmittedPrompt[]>('submittedPrompts', []);
  
  const [lastResult, setLastResult] = useState<ScorePromptOutput | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedName = localStorage.getItem("screenName");
    if (!storedName) {
      router.push('/');
    } else {
      const storedUserId = localStorage.getItem('userId');
      if(!storedUserId) {
        // Simple unique ID for anonymous users
        setUserId(`user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
      }
    }
  }, [router, setUserId]);

  const availableChallenges = useMemo(() => {
    if (!selectedPersona) return [];
    const completedChallengeIds = new Set(
      submittedPrompts
        .filter(p => p.personaId === selectedPersona.id)
        .map(p => p.challengeId)
    );
    return challenges.filter(c => c.personaId === selectedPersona.id && !completedChallengeIds.has(c.challengeId));
  }, [selectedPersona, submittedPrompts]);
  
  const currentChallenge = useMemo(() => {
    if (availableChallenges.length > 0) {
      return availableChallenges[0];
    }
    return null;
  }, [availableChallenges]);

  const userTotalScore = useMemo(() => {
    return submittedPrompts.reduce((total, p) => total + p.score, 0);
  }, [submittedPrompts]);

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
    setLastResult(null);
  };

  const handleSurpriseMe = () => {
    const randomPersona = personas[Math.floor(Math.random() * personas.length)];
    handlePersonaSelect(randomPersona);
  };

  const form = useForm<z.infer<typeof promptSchema>>({
    resolver: zodResolver(promptSchema),
    defaultValues: { prompt: '' },
  });

  const onSubmit = async (values: z.infer<typeof promptSchema>) => {
    if (!currentChallenge || !userId || !screenName) return;
    setIsSubmitting(true);
    setLastResult(null);

    const result = await submitPrompt({ 
      prompt: values.prompt,
      userId,
      screenName,
      scenario: currentChallenge.scenario,
      task: currentChallenge.title,
    });
    setIsSubmitting(false);

    if (result.success && result.data) {
      setLastResult(result.data);
      const newSubmission: SubmittedPrompt = {
        personaId: currentChallenge.personaId,
        challengeId: currentChallenge.challengeId,
        prompt: values.prompt,
        score: result.data.overallScore, // Score for this specific challenge
      };
      
      const existingSubmissionIndex = submittedPrompts.findIndex(p => p.personaId === newSubmission.personaId && p.challengeId === newSubmission.challengeId);
      if (existingSubmissionIndex > -1) {
        const updatedPrompts = [...submittedPrompts];
        updatedPrompts[existingSubmissionIndex] = newSubmission;
        setSubmittedPrompts(updatedPrompts);
      } else {
        setSubmittedPrompts([...submittedPrompts, newSubmission]);
      }
      
      toast({
        title: "Prompt Scored!",
        description: `You scored ${result.data.overallScore} on this challenge.`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "An unknown error occurred.",
      });
    }
  };

  const navigateToNextChallenge = () => {
    setLastResult(null);
    form.reset();
    // The useEffect for availableChallenges will handle setting the next one
  };
  
  useEffect(() => {
    form.reset();
  }, [currentChallenge, form]);

  const handleAnotherChallenge = () => {
    setSelectedPersona(null);
    setLastResult(null);
  }
  
  const handleLogout = () => {
    // Clear all user-related data
    localStorage.removeItem("screenName");
    localStorage.removeItem("privacyAgreed");
    localStorage.removeItem("selectedPersona");
    localStorage.removeItem("submittedPrompts");
    localStorage.removeItem("userId");
    router.replace('/');
  }

  if (!isMounted || !screenName) {
    return <div className="flex min-h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  if (!selectedPersona) {
    return (
      <div className="min-h-screen flex flex-col p-4">
         <header className="flex items-center justify-between mb-8">
            <div className="text-right">
                <div className="flex items-center gap-2 justify-end">
                    <User className="h-5 w-5 text-muted-foreground"/>
                    <span className="font-semibold">{screenName}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Score: {userTotalScore}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>Log Out</Button>
        </header>
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Select Your Persona</h1>
            <p className="text-muted-foreground mt-2">Choose a role to tackle its unique prompt challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {personas.map(p => (
              <Card key={p.id} onClick={() => handlePersonaSelect(p)} className="cursor-pointer hover:shadow-xl hover:border-primary transition-all duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-2">
                    <p.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Button size="lg" onClick={handleSurpriseMe}>
            <Dices className="mr-2 h-5 w-5" />
            Surprise Me!
          </Button>
        </div>
      </div>
    );
  }

  const CompletedPersonaChallanges = () => (
    <Card>
        <CardContent className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
            <PartyPopper className="h-16 w-16 text-primary mb-4" />
            <CardTitle className="text-2xl mb-2">Congratulations!</CardTitle>
            <CardDescription className="mb-6">You've completed all challenges for the {selectedPersona.name} persona.</CardDescription>
            <Button onClick={handleAnotherChallenge}>Choose Another Persona</Button>
        </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
       <header className="flex items-center justify-between mb-8">
         <Button variant="outline" onClick={handleLogout}>Log Out</Button>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <User className="h-5 w-5 text-muted-foreground"/>
            <span className="font-semibold">{screenName}</span>
          </div>
          <p className="text-sm text-muted-foreground">Total Score: {userTotalScore}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Challenge Display */}
          {currentChallenge ? (
              <>
                <Card>
                    <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">{selectedPersona.name} Challenge</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                    <div>
                        <h3 className="font-semibold mb-2 text-lg">Story</h3>
                        <p className="text-muted-foreground">{currentChallenge.scenario}</p>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-semibold mb-2 text-lg">Your Task</h3>
                        <p className="text-muted-foreground">{currentChallenge.title}</p>
                    </div>
                    </CardContent>
                </Card>

                {/* Prompt Form */}
                <Card>
                    <CardHeader>
                    <CardTitle>Craft Your Prompt</CardTitle>
                    <CardDescription>Enter your complete prompt in the text area below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="prompt" render={({ field }) => (
                            <FormItem>
                            <FormLabel>Your Prompt</FormLabel>
                            <FormControl>
                                <Textarea placeholder="As a..., I want you to..." {...field} rows={10} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Submit & Score Prompt
                        </Button>
                        </form>
                    </Form>
                    </CardContent>
                </Card>
              </>
          ) : (
            <CompletedPersonaChallanges/>
          )}
        </div>

        <div className="space-y-8">
           {/* Results Display */}
           <Card>
            <CardHeader>
              <CardTitle>Your Results</CardTitle>
              <CardDescription>Feedback on your submitted prompt will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitting ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-muted-foreground">AI is scoring your prompt...</p>
                </div>
              ) : lastResult ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Score Breakdown</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                          <p className="text-sm font-medium flex justify-between">Persona <span>{lastResult.personaScore}/100</span></p>
                          <Progress value={lastResult.personaScore} className="h-2" />
                      </div>
                      <div className="space-y-1">
                          <p className="text-sm font-medium flex justify-between">Context <span>{lastResult.contextScore}/100</span></p>
                          <Progress value={lastResult.contextScore} className="h-2" />
                      </div>
                      <div className="space-y-1">
                          <p className="text-sm font-medium flex justify-between">Task <span>{lastResult.taskScore}/100</span></p>
                          <Progress value={lastResult.taskScore} className="h-2" />
                      </div>
                      <div className="space-y-1">
                          <p className="text-sm font-medium flex justify-between">Format <span>{lastResult.formatScore}/100</span></p>
                          <Progress value={lastResult.formatScore} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <Separator/>
                   <div>
                    <h3 className="font-semibold mb-2 flex justify-between items-center text-lg">
                      <span>Overall Score</span>
                      <span className="text-primary">{lastResult.overallScore}/100</span>
                    </h3>
                    <Progress value={lastResult.overallScore} className="h-3" />
                  </div>
                  <Separator/>
                  <div>
                      <h3 className="font-semibold mb-2">Feedback</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">{lastResult.feedback}</p>
                  </div>
                  <Separator/>
                  <div>
                      <h3 className="font-semibold mb-2">Recommended Structure</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">{lastResult.recommendedStructure}</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center pt-4">
                    {availableChallenges.length > 0 ? (
                        <Button onClick={navigateToNextChallenge}>
                            Next Challenge <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <div></div>
                    )}
                    <Button variant="outline" onClick={handleAnotherChallenge}>Up for another challenge?</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground h-64 flex items-center justify-center">
                  <p>Submit a prompt to see your score.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
