function DisciplinaryActionCard() {
  return (
    <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 card-transition">

      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <div class="p-2 rounded-lg bg-emerald-50 text-emerald-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <div>
            <h2 class="font-bold text-slate-800 text-sm">DISCIPLINARY STATUS</h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3 mt-4">
        <div class="p-3 bg-slate-50/60 rounded-xl text-center border border-slate-100">
          <span class="block text-xl font-bold text-slate-800">0</span>
          <span class="text-[11px] text-slate-500 font-medium block mt-1">Warning Letters</span>
        </div>
        <div class="p-3 bg-slate-50/60 rounded-xl text-center border border-slate-100">
          <span class="block text-xl font-bold text-slate-800">0</span>
          <span class="text-[11px] text-slate-500 font-medium block mt-1">Attendance Appeals</span>
        </div>
        <div class="p-3 bg-slate-50/60 rounded-xl text-center border border-slate-100">
          <span class="block text-xl font-bold text-slate-800">0</span>
          <span class="text-[11px] text-slate-500 font-medium block mt-1">Probation Notices</span>
        </div>
      </div>

    </div>
  )
}

export default DisciplinaryActionCard