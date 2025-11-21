// TODO #1: string, number, boolean
export const appName: string = 'TS Task Manager';
export let version: number = 1.0;
export const debugMode: boolean = false;

// TODO #2: any + تعليق توضيحي
// استخدمنا any مرة واحدة لشرح، لكن تجنبه في الكود الحقيقي لأنه يلغي فائدة الـ types.
export let unsafeValue: any = null;

// TODO #3: literal type
export type Priority = 'low' | 'medium' | 'high';
export const defaultPriority: Priority = 'medium';
