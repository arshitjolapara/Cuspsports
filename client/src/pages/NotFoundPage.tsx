import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return <div className="py-20 text-center"><h1 className="text-4xl font-bold">Page not found</h1><Link className="mt-4 inline-block text-brand-700 hover:underline" to="/">Return home</Link></div>;
}
