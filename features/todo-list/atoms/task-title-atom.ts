import { atom, useAtom } from 'jotai'

const taskTitleAtom = atom('')

export const useTaskTitle = () => {
  const [taskTitle, setTaskTitle] = useAtom(taskTitleAtom)
  return { taskTitle, setTaskTitle }
}
