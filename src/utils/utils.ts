export const getRandomFromArray = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];
