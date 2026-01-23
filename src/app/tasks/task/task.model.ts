export interface TaskItem {
  id: string
  userId: string
  title: string
  summary: string
  dueDate: string
}

export interface AddTaskItem{
  title: string
  summary: string
  date: string
}