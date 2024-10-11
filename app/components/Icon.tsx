export default function Icon({
  source,
  alt,
  colour,
  onClick,
  className,
}: {
  source: string;
  alt: string;
  colour: "blue" | "yellow" | "red";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`flex justify-center items-center bg-white rounded-full border-[15px] md:border-[30px] aspect-square w-32 md:w-64 h-32 md:h-64 shadow-inner-xl ${
        colour === "blue" ? "border-paper-from" : ""
      } ${colour === "yellow" ? "border-scissor-from" : ""} ${
        colour === "red" ? "border-rock-from" : ""
      } ${className}`}
      onClick={onClick}
      disabled={onClick === undefined}
      aria-label={alt}
    >
      <img className="w-1/2" src={source} alt={alt} />
    </button>
  );
}
