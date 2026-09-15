import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="grid items-center gap-12 py-16 lg:grid-cols-2">
      <div>
        <p className="mb-4 font-semibold uppercase tracking-wider text-brand-600">Play. Organize. Rise.</p>
        <h1 className="text-5xl font-bold tracking-tight text-slate-950">Your sport, connected.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Run tournaments, build your player identity, and follow rankings in one place.
        </p>
        <Link to="/register" className="mt-8 inline-block rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">
          Get started
        </Link>
      </div>
      <div className="rounded-3xl bg-brand-700 p-10 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-50">Coming together</p>
        <h2 className="mt-4 text-3xl font-bold">From first serve to final ranking.</h2>
        <p className="mt-4 leading-7 text-brand-50">CuSports gives players and organizers the tools to make every match count.</p>
      </div>
    </section>
  );
}
