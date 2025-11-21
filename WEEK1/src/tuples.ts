// TODO #13: tuple ثابت الطول
export type MyTuple = [string, number, boolean];
export const exampleTuple: MyTuple = ['item', 42, true];

// TODO #14: دالة ترجع tuple
export function makeTuple(a: string, b: number, c: boolean): MyTuple {
  return [a, b, c];
}
