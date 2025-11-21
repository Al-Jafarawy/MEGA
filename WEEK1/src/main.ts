import { TaskInfo, TaskStatus } from './typeAliases';
import { addTag } from './arrays';
import { appName, version } from './variables';

// TODO #15: Task مستعمل من TaskInfo
export type Task = TaskInfo;

// TODO #16: مصفوفة مهام وhistory
type HistoryTuple = [number, string, TaskStatus];
const tasks: Task[] = [];
const taskHistory: HistoryTuple[][] = [];

// TODO #17: ملخّص كـ tuple [pending, done, blocked]
type Summary = [number, number, number];
let taskSummary: Summary = [0, 0, 0];

// مساعد للعثور على فهرس
function findIndexById(id: number): number {
  return tasks.findIndex(t => t.id === id);
}

// TODO #18: addTask(title, status='pending', ...tags)
let nextId = 1;
export function addTask(title: string, status: TaskStatus = 'pending', ...tgs: string[]): Task {
  const task: Task = {
    id: nextId++,
    title,
    status,
    tags: tgs.length ? tgs : undefined
  };
  tasks.push(task);
  taskHistory.push([[task.id, task.title, task.status]]);
  updateSummary();
  return task;
}

// TODO #19: updateTask(id, newTitle?, newStatus?)
export function updateTask(id: number, newTitle?: string, newStatus?: TaskStatus): Task | null {
  const i = findIndexById(id);
  if (i === -1) return null;
  if (newTitle !== undefined) tasks[i].title = newTitle;
  if (newStatus !== undefined) tasks[i].status = newStatus;
  taskHistory.push([[tasks[i].id, tasks[i].title, tasks[i].status]]);
  updateSummary();
  return tasks[i];
}

// TODO #20: addMultipleTasks(...titles)
export function addMultipleTasks(...titles: string[]): Task[] {
  return titles.map(t => addTask(t));
}

// TODO #21: استخدام arrow في الطباعة
export function printTasks(): void {
  console.log('Tasks list:');
  tasks.forEach(task => {
    console.log(`- [${task.id}] ${task.title} (${task.status})${task.tags ? ' #' + task.tags.join(',') : ''}`);
  });
}

// TODO #22: تحديث الملخّص
function updateSummary(): void {
  const pending = tasks.filter(t => t.status === 'pending').length;
  const done = tasks.filter(t => t.status === 'done').length;
  const blocked = tasks.filter(t => t.status === 'blocked').length;
  taskSummary = [pending, done, blocked];
}

// TODO #23: سيناريو تجريبي
function demo(): void {
  console.log(`${appName} v${version}`);
  addTask('Wash dishes');
  addTask('Write report');
  addTask('Call client');
  updateTask(2, undefined, 'done');
  addTag('daily');
  addTag('office');
  printTasks();

  console.log('\nHistory log (snapshots):');
  taskHistory.forEach((snap, idx) => {
    console.log(`Snapshot ${idx + 1}:`);
    snap.forEach(([id, title, status]) => {
      console.log(`  * [${id}] ${title} -> ${status}`);
    });
  });

  console.log('\nSummary counts [pending, done, blocked]:', taskSummary);
}

demo();
