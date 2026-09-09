import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-50 text-slate-800 antialiased min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
