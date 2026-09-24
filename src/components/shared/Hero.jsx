function Hero() {

  return (

    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1680px] mx-auto  px-8 py-8 bg-white rounded-lg border border-slate-200/90 shadow-sm overflow-hidden flex flex-col xl:flex-row xl:items-center justify-between gap-6">  
      
        <div className="space-y-3">

          <div>
            <h1 className="mb-2 text-2xl lg:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
              Welcome back, <span className="text-brand-200">DABWAN MOHAMMED TAHA MOHAMMED</span>
            </h1>
            <div className="flex flex-wrap flex-col gap-2">
              <p className="text-sm text-slate-600 font-mono">
                <span className="font-medium text-slate-500">ID:</span> 0125240725239
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-500">Programme:</span> Bachelor of Mechatronics Engineering Technology with Honours
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-500">Semester:</span> 7
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-500">Intake:</span> 2407
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-brand-300">
            <a className="inline-flex items-center gap-1.5 hover:underline" href="#">
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Mentor &amp; Coordinator Details
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a className="inline-flex items-center gap-1.5 hover:underline" href="#">
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Update Contact Details
            </a>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full xl:w-auto">

          <div className="flex-1 bg-slate-50/70 border border-slate-200/80 rounded-lg p-4 flex flex-col justify-between min-w-[210px]">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">VISA STATUS</span>
            <div>
              <div className="text-[11px] text-slate-400">Expiry Date</div>
              <div className="text-base font-bold text-slate-800 font-mono mt-0.5">2027-07-29</div>
            </div>
            <a className="mt-3 text-xs text-brand-300 hover:underline font-medium inline-flex items-center gap-1" href="#">Renewal tracking →</a>
          </div>

          <div className="flex-1 bg-white border border-slate-200/90 rounded-lg p-4 min-[380px]:min-w-65 flex flex-col justify-between shadow-xs">

            <div className="flex flex-col items-start gap-2 mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">TUITION FEES</span>
              <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">Pay in advance to avoid hold</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Avoid service interruption or late fees</p>
            </div>

            <div className="flex flex-col min-[420px]:flex-row mt-4 gap-2">
              <button className="bg-brand-300 hover:bg-brand-200 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Pay Online
              </button>
              <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium py-2 px-2 rounded-lg transition flex items-center justify-center gap-1 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
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