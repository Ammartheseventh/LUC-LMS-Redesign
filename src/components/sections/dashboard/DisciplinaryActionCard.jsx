function DisciplinaryActionCard() {
  return (
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-5 card-transition">

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-sm">DISCIPLINARY STATUS</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="p-3 bg-slate-50/60 rounded-lg text-center border border-slate-100">
          <span className="block text-xl font-bold text-slate-800">0</span>
          <span className="text-[11px] text-slate-500 font-medium block mt-1">Warning Letters</span>
        </div>
        <div className="p-3 bg-slate-50/60 rounded-lg text-center border border-slate-100">
          <span className="block text-xl font-bold text-slate-800">0</span>
          <span className="text-[11px] text-slate-500 font-medium block mt-1">Attendance Appeals</span>
        </div>
        <div className="p-3 bg-slate-50/60 rounded-lg text-center border border-slate-100">
          <span className="block text-xl font-bold text-slate-800">0</span>
          <span className="text-[11px] text-slate-500 font-medium block mt-1">Probation Notices</span>
        </div>
      </div>

    </div>
  )
}

export default DisciplinaryActionCard