export const tags: string[] = ["home", "work", "urgent"];

export const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

export function addTag(t: string): void {
  tags.push(t);
}
export function removeLastTag(): string | undefined {
  return tags.pop();
}
