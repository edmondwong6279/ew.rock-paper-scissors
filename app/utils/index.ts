export enum options {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

/**
 * Calculates score for player 1, given both players have chosen options
 *
 * @param player1 choice from options
 * @param player2 choice from options
 * @returns score for player 1, 1 for victory, 0 for draw, -1 for loss
 */
export const calculateScore = (player1: options, player2: options) => {
  if (player1 === player2) {
    return 0;
  }

  switch (player1) {
    case options.PAPER:
      if (player2 === options.ROCK) return 1;
      if (player2 === options.SCISSORS) return -1;
      break;
    case options.ROCK:
      if (player2 === options.SCISSORS) return 1;
      if (player2 === options.PAPER) return -1;
      break;
    case options.SCISSORS:
      if (player2 === options.PAPER) return 1;
      if (player2 === options.ROCK) return -1;
      break;
  }
  return 0;
};

export const selectRandomOption = () => {
  const values = Object.keys(options);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  const choice = options[enumKey as keyof typeof options];
  return choice;
};
