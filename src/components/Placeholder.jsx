export default function Placeholder({ title }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1680px] mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-600 mt-2">
          This page is under construction.
        </p>
      </div>
    </section>
  )
}