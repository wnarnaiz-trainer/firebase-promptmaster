"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Trophy } from "lucide-react";

const onboardingSchema = z.object({
  screenName: z.string().max(20, "Screen name must be 20 characters or less.").optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the data privacy policy." }),
  }),
});

export default function OnboardingPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      screenName: "",
      agree: false,
    },
  });

  useEffect(() => {
    setIsMounted(true);
    // We only want to auto-redirect if they have already agreed.
    // This allows them to come back to this page to change their name.
    if (localStorage.getItem("privacyAgreed")) {
      // Check if we are on the initial load and not after a back navigation
      if (performance.getEntriesByType("navigation")[0].type !== 'back_forward') {
         if (localStorage.getItem("screenName")) {
            router.replace("/challenge");
         }
      }
    }
  }, [router]);

  const onSubmit = (values: z.infer<typeof onboardingSchema>) => {
    localStorage.setItem("screenName", values.screenName || 'Anonymous');
    localStorage.setItem("privacyAgreed", "true");
    router.replace("/challenge");
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
            <Trophy className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold">Prompt Master Challenge</CardTitle>
          <CardDescription>Welcome! Create your screen name to begin.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="screenName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Screen Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., PromptChampion" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                         I understand that the collection and use of this data, which includes some personal and confidential information, shall be in accordance with the Data Privacy Act of 2012 and Privacy of Globe. Visit globe.com.ph/privacy-policy.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Start Challenge
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
