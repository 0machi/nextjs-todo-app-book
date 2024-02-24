import { LogoutButton } from '@/features/auth/components/logout-button'

export default async function Page() {
  return (
    <>
      <div className="p-12">
        <LogoutButton label="Logout" />
      </div>
    </>
  )
}
