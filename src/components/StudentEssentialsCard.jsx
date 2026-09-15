function StudentEssentialsCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 card-transition" data-purpose="essential-links-card">

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-sm">STUDENT ESSENTIALS</h2>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100 text-xs mt-1">
        <a className="py-2.5 flex items-center justify-between group hover:underline transition" href="#">
          <span className="font-medium text-slate-700 group-hover:text-brand-400">1. Student Handbook (PDF)</span>
          <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </a>
        <a className="py-2.5 flex items-center justify-between group hover:underline transition" href="#">
          <span className="font-medium text-slate-700 group-hover:text-brand-400">2. Apply Bank Letter</span>
          <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </a>
        <a className="py-2.5 flex items-center justify-between group hover:underline transition" href="#">
          <span className="font-medium text-slate-700 group-hover:text-brand-400">3. Hostel Check-out Form</span>
          <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </a>
        <a className="py-2.5 flex items-center justify-between group hover:underline transition" href="#">
          <span className="font-medium text-slate-700 group-hover:text-brand-400">4. Hostel Maintenance Request</span>
          <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </a>
        <a className="py-2.5 flex items-center justify-between group hover:underline transition" href="#">
          <span className="font-medium text-slate-700 group-hover:text-brand-400">5. Room Transfer Request</span>
          <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </a>
      </div>

    </div>
  )
}

export default StudentEssentialsCard