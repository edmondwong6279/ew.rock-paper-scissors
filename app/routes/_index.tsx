import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Game from "~/components/Game";
import Score from "~/components/Score";

export const meta: MetaFunction = () => {
  return [
    { title: "Rock paper scissors" },
    {
      name: "description",
      content: "Simple rock paper scissors game implemented in Remix.",
    },
  ];
};

export default function Index() {
  const [score, setScore] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedScore = sessionStorage.getItem("playerScore");
      if (storedScore !== null) {
        const storedScoreParsed = parseInt(storedScore);
        if (isNaN(storedScoreParsed)) {
          sessionStorage.removeItem("playerScore");
        } else {
          return storedScoreParsed;
        }
      }
    }
    return 0;
  });

  // Update the session storage if score is a number
  useEffect(() => {
    if (score !== undefined) {
      sessionStorage.setItem("playerScore", `${score}`);
    }
  }, [score]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-[radial-gradient(100%_100%_at_50%_0%,hsl(var(--radial-from))_0%,hsl(var(--radial-to))_100%)] gap-16 p-8 md:p-12 overflow-hidden">
      <header className="flex items-center w-full max-w-[44rem] justify-between border-outline border-2 rounded-md md:rounded-xl p-3 md:p-6">
        <div className="max-w-20 md:max-w-48 mx-2 md:mx-1">
          <img src="./logo.svg" alt="Rock paper scissors logo" />
        </div>
        <Score score={score} />
      </header>
      <Game setScore={setScore} />
      <Footer />
    </div>
  );
}
