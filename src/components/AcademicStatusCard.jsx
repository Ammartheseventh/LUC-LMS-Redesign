const academicStatusLinks = [
  {label: "Academic Progression", href: ""},
  {label: "Subject Registration", href: ""},
  {label: "Attendance by Subject", href: ""},
  {label: "Result - Subject Registration", href: ""},
  {label: "Attendance [Semester Pattern]", href: ""},
  {label: "Semester Exam Results", href: ""},
  {label: "Continuous Assessment", href: ""},
  {label: "Exemption & Credit Transfer", href: ""},
  {label: "Final Year Project Docs", href: ""}
]

function AcademicStatusCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 card-transition flex flex-col justify-between gap-2">
      <div className="flex gap-3 items-center pb-3 border-b border-slate-100">
        <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-sm">MY ACADEMIC STATUS</h2>
        </div>
      </div>
      <ul className="divide-y divide-slate-100 text-xs">
        {academicStatusLinks.map((link, index) => (
          <li className="py-2.5 px-1 flex items-center justify-between group text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-400 cursor-pointer transition">
            <div className="flex gap-3">  
              <span
              className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center font-mono text-xm text-slate-500 group-hover:text-brand-400 font-medium shrink-0"
              >
                {index + 1}
              </span>
              <a
              key={link.href}
              href={link.href}
              >
                {link.label}
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-slate-300 group-hover:text-brand-400 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AcademicStatusCard