import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/auth.context';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/dashboard';

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      if (mode === 'register') await signUp({ name, email, password });
      else await signIn({ email, password });
      navigate(from, { replace: true });
    } catch {
      setError('We could not complete that request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div>
        <h1 className="text-2xl font-bold">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-2 text-sm text-slate-600">
          {mode === 'login' ? 'Sign in to manage your tournaments.' : 'Build your player identity on CuSports.'}
        </p>
      </div>
      {mode === 'register' && <Field label="Name" value={name} onChange={setName} required />}
      <Field label="Email" type="email" value={email} onChange={setEmail} required />
      <Field label="Password" type="password" value={password} onChange={setPassword} minLength={8} required />
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <button className="w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50" disabled={isSubmitting}>
        {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Sign in' : 'Create account'}
      </button>
      <p className="text-center text-sm text-slate-600">
        {mode === 'login' ? 'New to CuSports? ' : 'Already have an account? '}
        <Link className="font-semibold text-brand-700 hover:underline" to={mode === 'login' ? '/register' : '/login'}>
          {mode === 'login' ? 'Create an account' : 'Sign in'}
        </Link>
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  ...props
}: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; minLength?: number }) {
  return (
    <label className="block space-y-2 text-sm font-medium text-slate-700">
      {label}
      <input className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" type={type} value={value} onChange={(event) => onChange(event.target.value)} {...props} />
    </label>
  );
}
