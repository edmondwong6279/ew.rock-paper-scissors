import Icon from "./Icon";
import { options } from "~/utils";

export default function Choose({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<options | null>>;
}) {
  return (
    <section className="grid gap-x-7 gap-y-3 relative w-full [grid-template-areas:'paper_scissors''rock_rock'] grid-rows-[1fr_1fr]">
      <img
        src="./bg-triangle.svg"
        alt="background"
        className="absolute w-full h-full p-16"
      />
      <Icon
        source={"icon-rock.svg"}
        alt="rock icon"
        colour="red"
        onClick={() => {
          setSelected(options.ROCK);
        }}
        className="[grid-area:rock] z-10 justify-self-center self-end"
      />
      <Icon
        source={"./icon-paper.svg"}
        alt="paper icon"
        colour="blue"
        onClick={() => {
          setSelected(options.PAPER);
        }}
        className="[grid-area:paper] z-10 justify-self-start"
      />
      <Icon
        source={"./icon-scissors.svg"}
        alt="scissors icon"
        colour="yellow"
        onClick={() => {
          setSelected(options.SCISSORS);
        }}
        className="[grid-area:scissors] z-10 justify-self-end"
      />
    </section>
  );
}
