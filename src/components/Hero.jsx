function Hero() {

  return (

    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1680px] mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col xl:flex-row xl:items-center justify-between gap-6 px-8 py-10">  
      
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Active Student
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 font-mono">
              ID: 0125240725239
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              Semester 7
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              Intake: 2407
            </span>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              Welcome back, <span className="text-brand-700">DABWAN MOHAMMED TAHA MOHAMMED</span>
            </h1>
            <p className="text-sm text-slate-600 mt-1"><span className="font-medium text-slate-500">
              Programme:</span> Bachelor of Mechatronics Engineering Technology with Honours
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-brand-700">
            <a className="inline-flex items-center gap-1.5 hover:underline" href="#">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              Mentor &amp; Coordinator Details
            </a>
            <span className="text-slate-300">•</span>
            <a className="inline-flex items-center gap-1.5 hover:underline" href="#">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              Update Contact Details
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full xl:w-auto">

          <div className="flex-1 bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between min-w-[210px]">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">VISA STATUS</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 text-emerald-800">Valid</span>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Expiry Date</div>
              <div className="text-base font-bold text-slate-800 font-mono mt-0.5">2027-07-29</div>
            </div>
            <a className="mt-3 text-xs text-brand-700 hover:text-brand-900 font-medium inline-flex items-center gap-1" href="#">Renewal tracking →</a>
          </div>

          <div className="flex-1 bg-white border border-slate-200/90 rounded-xl p-4 min-[380px]:min-w-[260px] flex flex-col justify-between shadow-xs">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">TUITION FEES</span>
                <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">Pay in advance to avoid hold</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Avoid service interruption or late fees</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">Notice</span>
            </div>
            <div className="flex flex-col min-[420px]:flex-row mt-4 gap-2">
              <button className="bg-[#1D4879] hover:bg-[#00315E] text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
                Pay Online
              </button>
              <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium py-2 px-2 rounded-lg transition flex items-center justify-center gap-1 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>Upload Slip
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
      
    
  )

}

export default Hero