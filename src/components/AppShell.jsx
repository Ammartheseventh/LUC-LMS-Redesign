import { Outlet } from 'react-router'
import Header from './Header'
import Hero from './Hero'
import Navigation from './Navigation'

export default function AppShell() {
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-50 text-slate-800 antialiased min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <Hero />
      <Navigation />
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1680px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}