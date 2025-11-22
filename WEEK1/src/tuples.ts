export type MyTuple = [string, number, boolean];
export const exampleTuple: MyTuple = ['item', 42, true];

export function makeTuple(a: string, b: number, c: boolean): MyTuple {
  return [a, b, c];
}
