export const titleCharacters = (value: string) =>
  value.split('').map((letter, letterIndex) => ({
    id: `${value}-${letterIndex}-${letter}`,
    letter
  }));
