function AnnouncementsCard() {
  return (
    <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 card-transition flex flex-col justify-between" data-purpose="announcements-feed">

      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <div class="p-2 rounded-lg bg-amber-50 text-amber-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <h2 class="font-bold text-slate-800 text-sm">ANNOUNCEMENTS</h2>          
        </div>
      </div>

      <div class="space-y-3 mt-4">
        <article class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-[11px] text-slate-400 font-mono">Sep 2026</span>
          </div>
          <h3 class="text-xs font-semibold text-slate-800 leading-snug">Orientation Programme for March, April and July 2026 Intake</h3>
          <p class="text-[11px] text-slate-500 mt-1">Welcome briefing sessions and registration assistance schedule now available.</p>
          <div class="flex items-center gap-4 mt-2.5 pt-2 border-t border-slate-200/50 text-[11px]">
            <a class="font-medium text-brand-300 hover:underline inline-flex items-center gap-1" href="#">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
              View Details
            </a>
            <a class="font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
              View Poster
            </a>
          </div>
        </article>
        <article class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-[11px] text-slate-400 font-mono">Aug 2026</span>
          </div>
          <h3 class="text-xs font-semibold text-slate-800 leading-snug">FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures</h3>
          <p class="text-[11px] text-slate-500 mt-1">Cultural performance registrations and exhibition booths now open to students.</p>
          <div class="flex items-center gap-4 mt-2.5 pt-2 border-t border-slate-200/50 text-[11px]">
            <a class="font-medium text-brand-300 hover:underline inline-flex items-center gap-1" href="#">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
              View Details
            </a>
            <a class="font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
              View Poster
            </a>
          </div>
        </article>
      </div>
      
    </div>
  )
}

export default AnnouncementsCard