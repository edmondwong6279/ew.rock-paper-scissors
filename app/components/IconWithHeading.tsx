import { options } from "./Game";
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
      <h2 className="text-white font-semibold tracking-wider text-lg md:text-2xl">
        {heading}
      </h2>
      {selected === options.rock && (
        <Icon
          source={"./icon-rock.svg"}
          alt="rock icon"
          colour="red"
          className="cursor-default"
        />
      )}
      {selected === options.paper && (
        <Icon
          source={"./icon-paper.svg"}
          alt="paper icon"
          colour="blue"
          className="cursor-default"
        />
      )}
      {selected === options.scissors && (
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
