import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function HomeLayout() {
  return (
    <main className="min-h-screen bg-slate-200 w-full px-12">
      <Navbar />
      <Outlet />
    </main>
  )
}

export default HomeLayout
