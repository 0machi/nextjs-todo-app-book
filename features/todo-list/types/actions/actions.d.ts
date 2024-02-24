export type UpdateTaskStatusAction = (id: string, isCompleted: boolean) => Promise<ActionResult>
export type DeleteTaskAction = (id: string) => Promise<ActionResult>
