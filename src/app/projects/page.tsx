import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function ProjectsPortfolioPage() {
  return (
    <main className="flex-1 grid place-items-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h1>

      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Projects portfolio page (coming soon).
      </p>

      <div className="mt-8">
        <Link
          href="/projects/example-project"
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:opacity-80"
        >
          Go to an example project detail →
        </Link>
      </div>
    </main>
  );
}
