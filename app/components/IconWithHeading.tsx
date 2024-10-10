import { options } from "~/utils";
import Icon from "./Icon";

export default function IconWithHeading({
  selected,
  heading,
  radial = false,
  className,
}: {
  selected: options | null;
  heading: string;
  radial?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col-reverse md:flex-col gap-4 justify-between items-center ${className}`}
    >
      <h2 className="text-white font-semibold tracking-wider text- md:text-2xl">
        {heading}
      </h2>
      <div className="relative">
        {selected === options.ROCK && (
          <Icon
            source={"./icon-rock.svg"}
            alt="rock icon"
            colour="red"
            className="cursor-default z-10 relative"
          />
        )}
        {selected === options.PAPER && (
          <Icon
            source={"./icon-paper.svg"}
            alt="paper icon"
            colour="blue"
            className="cursor-default z-10 relative"
          />
        )}
        {selected === options.SCISSORS && (
          <Icon
            source={"./icon-scissors.svg"}
            alt="scissors icon"
            colour="yellow"
            className="cursor-default z-10 relative"
          />
        )}
        {selected === null && (
          <div className="rounded-full opacity-20 bg-black w-32 md:w-64 h-32 md:h-64" />
        )}
        {radial && (
          <>
            {[
              { opacity: 0.06, scale: 1.5 },
              { opacity: 0.04, scale: 2 },
              { opacity: 0.02, scale: 2.5 },
            ].map(({ opacity, scale }, idx) => (
              <div
                key={idx}
                className={`absolute m-auto top-0 bottom-0 rounded-full pointer-events-none opacity-[${opacity}] bg-white w-32 md:w-64 h-32 md:h-64 scale-[${scale}]`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
