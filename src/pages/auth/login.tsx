import { LoginForm } from "../../features/auth/login"

export default function Login() {
  return (
    <div className='flex justify-center pt-10 p-4'>
      <div className='w-full sm:w-96 flex flex-col p-4 shadow-md rounded-md'>
        <LoginForm />
      </div>
    </div>
  )
}
