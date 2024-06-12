import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className='flex overflow-x-hidden'>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>Layout</h1>
      </div>
      <div className='p-5'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
