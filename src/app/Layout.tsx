import { Outlet } from 'react-router'
import Header from '../widgets/Header'

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand text-white">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}