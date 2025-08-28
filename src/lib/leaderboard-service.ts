"use server";

import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, setDoc, query, orderBy, limit } from "firebase/firestore";
import type { LeaderboardEntry } from "./types";

const LEADERBOARD_COLLECTION = "leaderboard";

export async function updateUserScore(userId: string, screenName: string, score: number) {
  try {
    const userRef = doc(db, LEADERBOARD_COLLECTION, userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const currentData = userDoc.data();
      await setDoc(userRef, { 
        name: screenName, // Always update name in case it changes
        score: currentData.score + score 
      }, { merge: true });
    } else {
      await setDoc(userRef, { name: screenName, score });
    }
  } catch (error) {
    console.error("Error updating user score:", error);
    throw new Error("Could not update user score.");
  }
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    const q = query(collection(db, LEADERBOARD_COLLECTION), orderBy("score", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    
    const leaderboard: LeaderboardEntry[] = [];
    let rank = 1;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      leaderboard.push({
        rank: rank++,
        name: data.name,
        score: data.score,
      });
    });
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}
