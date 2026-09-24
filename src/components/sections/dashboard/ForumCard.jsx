import { useRef, useState, useCallback, useEffect } from "react"

const forumThreads = [
  {
    id: 1,
    title: "MTR302 Mechatronics System Design - FYP Group Formation & Sensor Kits Discussion",
    description: "Please confirm your team members for the autonomous robotics lab module before Friday.",
    replies: 18,
  },
  {
    id: 2,
    title: "ENG201 Engineering Mathematics IV - Tutorial 5 Solutions & Clarifications",
    description: "Dr. Hisham uploaded clarification notes on Laplace transform differential equation problems.",
    replies: 24,
  },
  {
    id: 3,
    title: "MTR401 Control Systems - Lab Report Format Questions",
    description: "Several students have asked about the required format for the upcoming lab report submission.",
    replies: 12,
  },
  {
    id: 4,
    title: "General Discussion - Study Group for Final Exams",
    description: "Looking for students interested in forming a study group for the end-of-semester exams.",
    replies: 31,
  },
  {
    id: 5,
    title: "MTR302 Sensor Kit Availability Update",
    description: "The department has confirmed additional sensor kits will be available from next week.",
    replies: 7,
  },
  {
    id: 6,
    title: "Engineering Ethics - Case Study Discussion",
    description: "Weekly case study posted. Please review and share your thoughts before the tutorial.",
    replies: 15,
  },
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

function ForumCard() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const isTwoColumnGrid = useMediaQuery("(min-width: 768px) and (max-width: 1279px)")
  const perPage = isTwoColumnGrid ? 2 : 3

  const pages = []
  for (let i = 0; i < forumThreads.length; i += perPage) {
    pages.push(forumThreads.slice(i, i + perPage))
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
    <div className="bg-white rounded-lg border border-slate-200/90 shadow-sm p-5 card-transition flex flex-col">

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h2 className="font-bold text-slate-800 text-sm">MY FORUM</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll forum left"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-brand-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-slate-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Scroll forum right"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-600 shadow-xs transition hover:text-brand-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-slate-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>

      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto mt-4 snap-x snap-mandatory overscroll-x-contain scrollbar-none [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className="shrink-0 w-full snap-start flex flex-col gap-3"
          >
            {page.map((thread) => (
              <article
                key={thread.id}
                className="flex flex-col gap-2 p-3.5 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <h3 className="text-xs font-semibold text-slate-800 leading-snug line-clamp-1">
                  {thread.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {thread.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-[11px]">
                  <span className="text-slate-500 font-medium inline-flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    {thread.replies} Replies
                  </span>
                  <a
                    className="font-medium text-brand-300 hover:underline inline-flex items-center gap-1"
                    href="#"
                  >
                    View Discussion →
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

export default ForumCard