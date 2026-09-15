import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../features/auth/auth.context';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'
  }`;

export function AppLayout() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight text-brand-700">
            CuSports
          </Link>
          <nav className="flex items-center gap-2" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            {user ? (
              <>
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <button className="ml-2 text-sm font-medium text-slate-600 hover:text-slate-900" onClick={signOut}>
                  Sign out
                </button>
              </>
            ) : (
              <NavLink to="/login" className={navLinkClass}>
                Sign in
              </NavLink>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
