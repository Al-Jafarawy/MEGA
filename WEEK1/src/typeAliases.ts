// TODO #11: type alias بسيطة
export type ID = number;

// TODO #12: نوع متقدم مع union و literal
export type TaskStatus = 'pending' | 'done' | 'blocked';
export type TaskInfo = {
  id: ID;
  title: string;
  status: TaskStatus;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
};
