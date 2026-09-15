import { AuthForm } from '../shared/components/AuthForm';

export function LoginPage() {
  return <div className="flex justify-center py-12"><AuthForm mode="login" /></div>;
}
