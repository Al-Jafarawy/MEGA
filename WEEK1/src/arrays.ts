// TODO #4: مصفوفة نصية
export const tags: string[] = ['home', 'work', 'urgent'];

// TODO #5: مصفوفة متعددة الأبعاد
export const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];

// TODO #6: دوال push/pop مع نوعية ثابتة
export function addTag(t: string): void {
  tags.push(t);
}
export function removeLastTag(): string | undefined {
  return tags.pop();
}
