function ForumCard() {
  return (
    <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 card-transition flex flex-col justify-between">

      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <div class="p-2 rounded-lg bg-teal-50 text-teal-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <h2 class="font-bold text-slate-800 text-sm">MY FORUM</h2>
        </div>
      </div>

      <div class="space-y-3 mt-4">

        <article class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition">
          <h3 class="text-xs font-semibold text-slate-800 leading-snug">MTR302 Mechatronics System Design - FYP Group
            Formation &amp; Sensor Kits Discussion</h3>
          <p class="text-[11px] text-slate-500 mt-1">Please confirm your team members for the autonomous robotics lab
            module before Friday.</p>
          <div class="flex items-center justify-between gap-4 mt-2.5 pt-2 border-t border-slate-200/50 text-[11px]">
            <span class="text-slate-500 font-medium inline-flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              18 Replies
            </span>
            <a class="font-medium text-brand-300 hover:underline inline-flex items-center gap-1" href="#">View Discussion →</a>
          </div>
        </article>

        <article class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition">
          <h3 class="text-xs font-semibold text-slate-800 leading-snug">ENG201 Engineering Mathematics IV - Tutorial 5
            Solutions &amp; Clarifications</h3>
          <p class="text-[11px] text-slate-500 mt-1">Dr. Hisham uploaded clarification notes on Laplace transform
            differential equation problems.</p>
          <div class="flex items-center justify-between gap-4 mt-2.5 pt-2 border-t border-slate-200/50 text-[11px]">
            <span class="text-slate-500 font-medium inline-flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              24 Replies
            </span>
            <a class="font-medium text-brand-300 hover:underline inline-flex items-center gap-1" href="#">View Discussion →</a>
          </div>
        </article>

      </div>

    </div>
  )
}

export default ForumCard