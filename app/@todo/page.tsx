import { LogoutButton } from '@/features/auth/components/logout-button'
import { TodoListContainer } from '@/features/todo-list'

export default async function Page() {
  return (
    <>
      <div className="p-12">
        <LogoutButton label="Logout" />
      </div>
      <TodoListContainer />
    </>
  )
}
