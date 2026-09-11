import { Outlet } from 'react-router'
import Header from './Header'
import Dashboard from './Hero'
import Navigation from './Navigation'

export default function AppShell() {
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-50 text-slate-800 antialiased min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <Dashboard />
      <Navigation />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}