function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#072242] border-b border-[#0b3c6d] shadow-md">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Left Brand & Crest */}
          <div className="flex items-center gap-3">
            <img alt="Lincoln University College myLLS Logo" className="h-10 w-auto object-contain" src="/src/assets/myLLS_logo.png" />
            <div className="flex flex-col">
              <span className="w-fit text-[11px] font-semibold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">STUDENT PORTAL</span>
              <span className="text-[11px] text-slate-300 tracking-wide font-medium">Lincoln University College</span>
            </div>
          </div>

          {/* Utility & User Profile Area */}
          <div className="flex items-center gap-3.5">

            {/* Notification Bell */}
            <button className="relative p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition" title="Announcements &amp; Alerts">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-[#072242]"></span>
            </button>

            {/* User Info Pill / Status Indicator */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-white/15">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 font-bold text-xs flex items-center justify-center">13</div>
              <div className="hidden sm:flex flex-col"><span className="text-xs font-semibold text-white leading-tight">13050151</span></div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header