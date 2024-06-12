import { Suspense, useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useAppDispatch } from "../hooks/useAppDispatch"

import { otherRoutes } from "../routes/other-route"
import { privateRoutes } from "../routes/private-route"
import { authRoutes } from "../routes/auth-route"

const router = createBrowserRouter([authRoutes, privateRoutes, otherRoutes])

export const PersistLogin = () => {
  const appDispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)
  //   useEffect(() => {
  //     const verifyRefreshToken = async () => {
  //       await appDispatch(refreshToken())
  //       setLoading(false)
  //     }
  //     void verifyRefreshToken()
  //   }, [])

  return loading ? null : (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}
