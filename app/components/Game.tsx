import { useCallback, useEffect, useState } from "react";
import {
  calculateScore,
  delayedCallback,
  options,
  selectRandomOption,
} from "~/utils";
import Choose from "./Choose";
import Reveal from "./Reveal";

export default function Game({
  setScore,
}: {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selected, setSelected] = useState<options | null>(null);
  const [houseSelected, setHouseSelected] = useState<options | null>(null);
  const [playerScore, setPlayerScore] = useState<number | null>(null);

  const reset = useCallback(() => {
    setSelected(null);
    setHouseSelected(null);
    setPlayerScore(null);
  }, []);

  useEffect(() => {
    if (selected !== null) {
      (async () => {
        const houseOption = selectRandomOption();
        const playerScore = calculateScore(selected, houseOption);

        await delayedCallback(() => {
          setHouseSelected(houseOption);
          setScore((prev) => {
            if (prev) {
              return prev + playerScore;
            }
            return playerScore;
          });
        }, 500);

        await delayedCallback(() => {
          setPlayerScore(playerScore);
        }, 500);
      })();
    }
  }, [selected, setScore]);

  return (
    <main className="w-full md:w-full max-w-sm md:max-w-5xl">
      {selected !== null ? (
        <Reveal
          selected={selected}
          houseSelected={houseSelected}
          playerScore={playerScore}
          reset={reset}
        />
      ) : (
        <Choose setSelected={setSelected} />
      )}
    </main>
  );
}
