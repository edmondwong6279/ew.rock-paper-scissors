import { useEffect, useState } from "react";
import Choose from "./Choose";
import Reveal from "./Reveal";

export enum options {
  "rock",
  "paper",
  "scissors",
}

export default function Game({
  setScore,
}: {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selected, setSelected] = useState<options | null>(null);

  // Logic for the game can just sit in this component
  useEffect(() => {
    setScore(0);
  }, [setScore]);

  return (
    <main className="w-full md:w-4/5 max-w-xl">
      {selected === null ? (
        <Choose setSelected={setSelected} />
      ) : (
        <Reveal selected={selected} />
      )}
    </main>
  );
}
