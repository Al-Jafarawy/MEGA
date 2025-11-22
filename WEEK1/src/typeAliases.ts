export type ID = number;

export type TaskStatus = 'pending' | 'done' | 'blocked';
export type TaskInfo = {
  id: ID;
  title: string;
  status: TaskStatus;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
};
