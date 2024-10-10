import { useEffect, useState } from "react";
import { calculateScore, options, selectRandomOption } from "~/utils";
import Choose from "./Choose";
import Reveal from "./Reveal";

export default function Game({
  setScore,
}: {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selected, setSelected] = useState<options | null>(null);
  const [houseSelected, setHouseSelected] = useState<options | null>(null);

  useEffect(() => {
    if (selected !== null) {
      const houseOption = selectRandomOption();
      const playerScore = calculateScore(selected, houseOption);

      setTimeout(() => {
        setHouseSelected(houseOption);
        setScore((prev) => prev + playerScore);
      }, 500);
    }
  }, [selected, setScore]);

  return (
    <main className="w-full md:w-4/5 max-w-sm md:max-w-xl">
      {selected !== null ? (
        <Reveal selected={selected} houseSelected={houseSelected} />
      ) : (
        <Choose setSelected={setSelected} />
      )}
    </main>
  );
}
