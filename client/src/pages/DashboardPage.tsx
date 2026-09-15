import { useAuth } from '../features/auth/auth.context';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Player space</p>
      <h1 className="mt-2 text-3xl font-bold">Welcome, {user?.name}</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {['Upcoming matches', 'Your organizations', 'Current rating'].map((item) => (
          <article key={item} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-3 text-sm text-slate-500">Ready for the next feature.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
