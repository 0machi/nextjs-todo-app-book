'use client'

import { Checkbox } from '@/components/elements/shadcn-ui/checkbox'
import type { DeleteTaskAction, UpdateTaskStatusAction } from '@/features/todo-list/types/actions/actions'
import type { Task } from '@/types/drizzle/task'
import type { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/elements/shadcn-ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/elements/shadcn-ui/dropdown-menu'

export const createTaskTableColumns = ({
  updateTaskStatusAction,
  deleteTaskAction,
}: {
  updateTaskStatusAction: UpdateTaskStatusAction
  deleteTaskAction: DeleteTaskAction
}): ColumnDef<Task>[] => {
  return [
    {
      accessorKey: 'isCompleted',
      header: '',
      cell: ({ row }) => {
        const task = row.original
        return (
          <Checkbox
            checked={task.isCompleted}
            onCheckedChange={(value) => {
              updateTaskStatusAction(task.id, !!value)
              row.toggleSelected(!!value)
            }}
            aria-label="Task status"
          />
        )
      },
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => {
        const task = row.original
        return <div className={task.isCompleted ? 'line-through' : ''}>{task.title}</div>
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'CreatedAt',
      cell: ({ row }) => {
        const task = row.original
        const createdAt = task.createdAt.toLocaleString('ja-JP', {
          timeZone: 'Asia/Tokyo',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        return <div>{createdAt}</div>
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const task = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Task action">
                <span className="sr-only"></span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive" onClick={() => deleteTaskAction(task.id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}
