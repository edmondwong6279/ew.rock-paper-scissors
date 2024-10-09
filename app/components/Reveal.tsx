import { options } from "./Game";
import Icon from "./Icon";

export default function Reveal({ selected }: { selected: options }) {
  return (
    <>
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
    </>
  );
}
