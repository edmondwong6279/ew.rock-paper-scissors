import IconWithHeading from "./IconWithHeading";
import { options } from "~/utils";

export default function Reveal({
  selected,
  houseSelected,
  playerScore,
  reset,
}: {
  selected: options;
  houseSelected: options | null;
  playerScore: number | null;
  reset: () => void;
}) {
  return (
    <div className="grid [grid-template-areas:'player_house''again_again'] md:[grid-template-areas:'player_again_house'] justify-between items-center">
      <IconWithHeading
        heading="YOU PICKED"
        selected={selected}
        radial={playerScore !== null && playerScore === 1}
        className="[grid-area:player]"
      />
      {playerScore !== null && (
        <div className="flex flex-col [grid-area:again] justify-center items-center gap-3">
          <h2 className="text-2xl md:text-6xl font-bold text-white text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {playerScore === 1 && "YOU WIN"}
            {playerScore === 0 && "IT'S A DRAW"}
            {playerScore === -1 && "YOU LOSE"}
          </h2>
          <button
            className="max-w-60 w-full h-12 text-xl font-semibold bg-white text-black rounded-md"
            onClick={() => {
              reset();
            }}
          >
            Play again
          </button>
        </div>
      )}
      <IconWithHeading
        heading="THE HOUSE PICKED"
        selected={houseSelected}
        radial={playerScore !== null && playerScore === -1}
        className="[grid-area:house]"
      />
    </div>
  );
}
