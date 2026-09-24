function GeneralLibraryCard() {
  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-5 card-transition flex flex-col justify-between">

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-50 text-brand-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wide">GENERAL LIBRARY</h2>
        </div>
      </div>

      <div className="p-5 mt-4 rounded-lg border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-lg bg-brand-300 text-white flex items-center justify-center font-bold text-sm shrink-0">
            LDL
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 leading-tight">Lincoln Digital Library</h3>
            <p className="text-sm text-slate-500 mt-0.5">E-Books, dissertations &amp; institutional archives</p>
          </div>
        </div>
        <a className="px-4 py-2 text-md font-semibold bg-brand-300 hover:bg-brand-200 text-white rounded-lg transition shrink-0 shadow-xs" href="#">Access</a>
      </div>


    </div>
  )
}

export default GeneralLibraryCard