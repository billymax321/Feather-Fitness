import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Navbar />{children}<Footer /></>;
}
