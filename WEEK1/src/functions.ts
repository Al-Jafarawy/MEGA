// TODO #7: دالة مع نوع إرجاع
export function sum(a: number, b: number): number {
  return a + b;
}

// TODO #8: وسيط اختياري + قيمة افتراضية
export function greet(name?: string, salutation: string = 'Hello'): string {
  return `${salutation} ${name ?? 'Guest'}`;
}

// TODO #9: rest parameter
export function joinWords(separator: string, ...words: string[]): string {
  return words.join(separator);
}

// TODO #10: دالة سهمية + forEach
export const logWords = (words: string[]): void => {
  words.forEach(w => console.log(w));
};
