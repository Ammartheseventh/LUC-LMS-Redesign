import { useRef, useState, useCallback, useEffect } from "react"

const announcements = [
  {
    id: 1,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 2,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  },
  {
    id: 3,
    date: "Aug 2026",
    title: "Semester Registration Deadline Extended",
    description: "Late registration window now open until the end of the month.",
  },
  {
    id: 4,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 5,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  },
  {
    id: 6,
    date: "Aug 2026",
    title: "Semester Registration Deadline Extended",
    description: "Late registration window now open until the end of the month.",
  },
  {
    id: 7,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 8,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  },
  {
    id: 9,
    date: "Aug 2026",
    title: "Semester Registration Deadline Extended",
    description: "Late registration window now open until the end of the month.",
  },
  {
    id: 10,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 11,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  },
  {
    id: 12,
    date: "Aug 2026",
    title: "Semester Registration Deadline Extended",
    description: "Late registration window now open until the end of the month.",
  },
  {
    id: 13,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 14,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  },
  {
    id: 15,
    date: "Aug 2026",
    title: "Semester Registration Deadline Extended",
    description: "Late registration window now open until the end of the month.",
  },
  {
    id: 16,
    date: "Sep 2026",
    title: "Orientation Programme for March, April and July 2026 Intake",
    description: "Welcome briefing sessions and registration assistance schedule now available.",
  },
  {
    id: 17,
    date: "Aug 2026",
    title: "FRESH FUSION NIGHT - A night of Afro-Arab-Asian cultures",
    description: "Cultural performance registrations and exhibition booths now open to students.",
  }
  
  // add more here — the component will scroll through all of them
]

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)

    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

function AnnouncementsCard() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isTwoColumnGrid = useMediaQuery("(min-width: 720px) and (max-width: 1200px)")
  const perPage = isTwoColumnGrid ? 2 : 3

  const pages = []
  for (let i = 0; i < announcements.length; i += perPage) {
    pages.push(announcements.slice(i, i + perPage))
  }

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

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: 0, behavior: "auto" })
    updateArrows()
  }, [perPage, updateArrows])

  const scrollByAmount = (direction) => {
    const el = scrollRef.current
    if (!el) return

    const gap = 12
    const amount = el.clientWidth + gap

    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 flex flex-col">

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="font-bold text-slate-800 text-sm">ANNOUNCEMENTS</h2>          
        </div>

        <div className="flex items-center gap-2">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-brand-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-slate-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-brand-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-slate-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>

      </div>

      <div ref={scrollRef} className="flex gap-3 snap-x snap-mandatory overflow-x-auto mt-4 overscroll-x-contain scrollbar-none [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {pages.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className="shrink-0 w-full snap-start flex flex-col gap-3"
          >
            {page.map((announcement) => (
              <article
                key={announcement.id}
                className="flex flex-col gap-2 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition"
              >  
                <p className="text-xs text-slate-400 font-mono">
                  {announcement.date}
                </p>
                <h3 className="text-xs font-semibold text-slate-800 leading-snug line-clamp-1">
                  {announcement.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {announcement.description}
                </p>
                <div className="flex items-center gap-4 pt-2 border-t border-slate-200/50 text-[11px]">
                  <a className="font-medium text-brand-300 hover:underline inline-flex items-center gap-1" href="#">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    View Details
                  </a>
                  <a className="font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    View Poster
                  </a>
                </div>
              </article>
            ))}  
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default AnnouncementsCard