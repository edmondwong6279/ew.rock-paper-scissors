import IconWithHeading from "./IconWithHeading";
import { options } from "~/utils";

export default function Reveal({
  selected,
  houseSelected,
}: {
  selected: options;
  houseSelected: options | null;
}) {
  return (
    <div className="flex justify-between items-center">
      <IconWithHeading heading="YOU PICKED" selected={selected} />
      <IconWithHeading heading="THE HOUSE PICKED" selected={houseSelected} />
    </div>
  );
}
