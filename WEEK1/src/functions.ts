export function sum(a: number, b: number): number {
  return a + b;
}

export function greet(name?: string, salutation: string = "Hello"): string {
  return `${salutation} ${name ?? "Guest"}`;
}

export function joinWords(separator: string, ...words: string[]): string {
  return words.join(separator);
}

export const logWords = (words: string[]): void => {
  words.forEach((w) => console.log(w));
};
