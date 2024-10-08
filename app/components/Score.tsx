/**
 * Score component for displaying a card with a large number.
 */
export default function Score({ score }: { score: number }) {
  return (
    <section className="flex flex-col items-center justify-around bg-white px-5 py-2 md:px-12 md:py-4 rounded-md">
      <p className="text-grey font-semibold text-xs md:text-base tracking-wider">
        SCORE
      </p>
      <h3 className="text-dark font-bold text-4xl md:text-5xl">{score}</h3>
    </section>
  );
}
