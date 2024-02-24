import { LoginButton } from '@/features/auth/components/login-button'

export default async function Page() {
  return (
    <div className="p-24">
      <LoginButton label="Login" />
    </div>
  )
}
