import { options } from "~/utils";
import Icon from "./Icon";

export default function IconWithHeading({
  selected,
  heading,
}: {
  selected: options | null;
  heading: string;
}) {
  return (
    <div className="relative flex flex-col-reverse md:flex-col gap-4 justify-between items-center">
      <h2 className="text-white font-semibold tracking-wider text- md:text-2xl">
        {heading}
      </h2>
      {selected === options.ROCK && (
        <Icon
          source={"./icon-rock.svg"}
          alt="rock icon"
          colour="red"
          className="cursor-default"
        />
      )}
      {selected === options.PAPER && (
        <Icon
          source={"./icon-paper.svg"}
          alt="paper icon"
          colour="blue"
          className="cursor-default"
        />
      )}
      {selected === options.SCISSORS && (
        <Icon
          source={"./icon-scissors.svg"}
          alt="scissors icon"
          colour="yellow"
          className="cursor-default"
        />
      )}
      {selected === null && (
        <div className="rounded-full opacity-20 bg-black w-32 md:w-64 h-32 md:h-64" />
      )}
    </div>
  );
}
