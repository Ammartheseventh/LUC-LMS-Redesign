import { useEffect, useRef, useState } from 'react'
import myLLSLogo from '../../assets/myLLS_logo.png'

const notifications = [
  {
    id: 1,
    title: "Tuition fee payment due",
    description: "Outstanding balance must be settled before the semester begins.",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    title: "New announcement from Registrar",
    description: "Orientation schedule for the new intake is now available.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    title: "Visa renewal reminder",
    description: "Your visa expires in 90 days. Please begin the renewal process.",
    time: "3d ago",
    unread: false,
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <header className="w-full sticky top-0 z-40 shadow-md">
      <div className="max-w-[1680px]  bg-brand-100 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left Brand & Crest */}
          <div className="flex items-center gap-3">
            <img alt="Lincoln University College myLLS Logo" className="h-10 w-auto object-contain" src={myLLSLogo} />
            <div className="hidden sm:flex sm:flex-col">
              <span className="w-fit text-md font-bold text-slate-100 ">STUDENT PORTAL</span>
              <span className="text-[11px] text-slate-300 tracking-wide font-medium">Lincoln University College</span>
            </div>
          </div>

          {/* Utility & User Profile Area */}
          <div className="flex gap-3.5">

            {/* Notification Bell & Menu */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Notifications"
                aria-expanded={isOpen}
                className="relative p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                title="Announcements &amp; Alerts"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {notifications.some((n) => n.unread) && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-[#072242]" />
                )}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-60 sm:w-80 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-800">Notifications</span>
                    <span className="text-[11px] text-slate-500">
                      {notifications.filter((n) => n.unread).length} new
                    </span>
                  </div>

                  <ul className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map((notification) => (
                      <li key={notification.id}>
                        <a href="#" className="block px-4 py-3 hover:bg-slate-50 transition">
                          <div className="flex items-start gap-2">
                            {notification.unread && (
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-300 shrink-0" />
                            )}
                            <div className={notification.unread ? '' : 'pl-3.5'}>
                              <p className="text-xs font-semibold text-slate-800 leading-snug">
                                {notification.title}
                              </p>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                                {notification.description}
                              </p>
                              <p className="text-[10px] text-slate-400 mt-1 font-mono">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* User Info Pill / Status Indicator */}
            <div className="flex items-center gap-3.5 md:pl-4.5 md:border-l border-white/15">
              <div className="hidden sm:flex sm:flex-col">
                <span className="text-xs font-semibold text-white leading-tight font-mono">13050151</span>
              </div>
              <a href="#" className="text-xs text-slate-300 hover:text-white transition hover:underline inline-flex items-center gap-1 px-2 py-1">
                <svg className="w-5.5 h-5.5 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="hidden md:inline">Change Password</span>
              </a>
              <a href="#" className="text-xs font-medium text-rose-300 hover:text-white hover:bg-rose-600/20 border border-rose-600/20 px-2 py-1 rounded-lg transition inline-flex items-center gap-1">
                <svg className="w-5.5 h-5.5 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline">Log Out</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header