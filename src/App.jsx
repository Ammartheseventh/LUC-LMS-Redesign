import { Routes, Route, Navigate } from 'react-router'
import AppShell from './components/AppShell'
import Placeholder from './components/Placeholder'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
        <Route path="/programme" element={<Placeholder title="My Programme" />} />
        <Route path="/applications" element={<Placeholder title="All Applications" />} />
        <Route path="/visa-renewal" element={<Placeholder title="Visa Renewal" />} />
        <Route path="/lecture-notes" element={<Placeholder title="My Lecture Notes" />} />
        <Route path="/assignments" element={<Placeholder title="My Assignments" />} />
        <Route path="/forum" element={<Placeholder title="My Forum" />} />
        <Route path="/plagiarism" element={<Placeholder title="Apply Plagiarism" />} />
        <Route path="/exam-slip" element={<Placeholder title="My Exam Slip" />} />
        <Route path="/evaluation" element={<Placeholder title="Evaluation" />} />
        <Route path="/e-library" element={<Placeholder title="E-Library" />} />
      </Route>
    </Routes>
  )
}

export default App