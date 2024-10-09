import { options } from "./Game";
import IconWithHeading from "./IconWithHeading";

export default function Reveal({ selected }: { selected: options }) {
  return (
    <div className="flex justify-between items-center">
      <IconWithHeading heading="YOU PICKED" selected={selected} />
      <IconWithHeading heading="THE HOUSE PICKED" selected={null} />
    </div>
  );
}
