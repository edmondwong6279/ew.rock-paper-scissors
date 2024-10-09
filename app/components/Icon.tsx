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
      className={`flex justify-center items-center bg-white rounded-full border-[20px] md:border-[30px] aspect-square w-32 md:w-64 h-32 md:h-64 shadow-inner-xl ${
        colour === "blue" ? "border-blue-400" : ""
      } ${colour === "yellow" ? "border-yellow-200" : ""} ${
        colour === "red" ? "border-red-500" : ""
      } ${className}`}
      onClick={onClick}
    >
      <img className="w-1/2" src={source} alt={alt} />
    </button>
  );
}
