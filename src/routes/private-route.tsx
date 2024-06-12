import { lazy } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { routes } from "./routes"
import { useAppSelector } from "../hooks/useAppSelector"

const DashboardLayout = lazy(async () => await import("../components/layouts/dashboard-layout"))

const AdminBoard = lazy(async () => await import("../pages/admin/admin"))

export const privateRoutes = {
  element: <PrivateRoute />,
  children: [
    {
      element: <DashboardLayout />,
      children: [
        {
          path: routes.private.userBoard,
          element: <AdminBoard />,
        },
      ],
    },
  ],
}

export default function PrivateRoute() {
  const location = useLocation()
  const { access_token } = useAppSelector((state) => state.auth)
  return access_token != null ? (
    <Outlet />
  ) : (
    <Navigate to={`/auth/login?callback=${location.pathname}`} />
  )
  // return <Outlet />
}
