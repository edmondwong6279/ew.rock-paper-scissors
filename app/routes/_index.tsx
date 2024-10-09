import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
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
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col h-screen items-center justify-between bg-dark gap-16 p-8 md:p-12">
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
