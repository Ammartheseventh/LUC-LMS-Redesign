import { useCallback, useEffect, useRef, useState } from "react"
import { NavLink } from 'react-router'

const navItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "My Programme",
    to: "/programme",
    path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    label: "All Applications",
    to: "/applications",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Visa Renewal",
    to: "/visa-renewal",
    path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    label: "My Lecture Notes",
    to: "/lecture-notes",
    path: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    label: "My Assignments",
    to: "/assignments",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    label: "My Forum",
    to: "/forum",
    path: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
  {
    label: "Apply Plagiarism",
    to: "/plagiarism",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    label: "My Exam Slip",
    to: "/exam-slip",
    path: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  },
  {
    label: "Evaluation",
    to: "/evaluation",
    path: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    label: "E-Library",
    to: "/e-library",
    path: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
]

function TabIcon({ path, active }) {
  return (
    <svg
      className={active ? "w-4 h-4" : "w-4 h-4 text-slate-400"}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d={path}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

export default function Navigation() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 1)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()

    el.addEventListener("scroll", updateArrows, { passive: true })
    const observer = new ResizeObserver(updateArrows)
    observer.observe(el)

    return () => {
      el.removeEventListener("scroll", updateArrows)
      observer.disconnect()
    }
  }, [updateArrows])

  const scrollByAmount = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.75, 160)
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      {/* Left arrow + fade (desktop only) */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute inset-y-0 left-6 lg:left-8 z-10 hidden md:flex items-center">
          <div className="absolute inset-y-1.5 left-0 w-16 rounded-l-xl bg-gradient-to-r from-white to-transparent" />
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Scroll left"
            className="pointer-events-auto relative ml-1.5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-[#1D4879] hover:bg-slate-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>
      )}

      {/* Right arrow + fade (desktop only) */}
      {canScrollRight && (
        <div className="pointer-events-none absolute inset-y-0 right-6 lg:right-8 z-10 hidden md:flex items-center justify-end">
          <div className="absolute inset-y-1.5 right-0 w-16 rounded-r-xl bg-gradient-to-l from-white to-transparent" />
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Scroll right"
            className="pointer-events-auto relative mr-1.5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-[#1D4879] hover:bg-slate-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>
      )}

      {/* Mobile-only edge fades: no arrows on touch, so these hint that the
          bar can be swiped further in that direction. */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute inset-y-1.5 left-0 z-10 w-8 rounded-l-xl bg-gradient-to-r from-white to-transparent md:hidden" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute inset-y-1.5 right-0 z-10 w-8 rounded-r-xl bg-gradient-to-l from-white to-transparent md:hidden" />
      )}

      <nav
        ref={scrollRef}
        className="max-w-[1680px] mx-auto bg-white rounded-xl border border-slate-200/80 p-1.5 shadow-sm overflow-x-auto snap-x snap-proximity overscroll-x-contain touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        data-purpose="primary-tabs"
      >
        <div className="flex items-center justify-center gap-1 min-w-max px-1 py-0.5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "snap-start px-3.5 py-1.5 rounded-lg bg-[#1D4879] hover:bg-[#00315E] text-white text-xs font-medium flex items-center gap-2 shrink-0"
                  : "snap-start px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-[#1D4879] hover:bg-slate-50 text-xs font-medium flex items-center gap-2 transition shrink-0"
              }
            >
              {({ isActive }) => (
                <>
                  <TabIcon path={item.path} active={isActive} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
