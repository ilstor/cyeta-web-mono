import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Container className="py-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            ← Back
          </Link>
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Our services
        </h1>

        <Paragraph className="mt-4 max-w-2xl">
          Discover top-tier building services tailored to both commercial and
          residential needs. Our seasoned team is dedicated to bringing your
          construction and renovation dreams to life with precision and quality
          craftsmanship.
        </Paragraph>

        <div className="mt-8 border-t border-black/10 dark:border-white/15" />

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Residential"
            imageSrc="/images/residential-img.ac09dc462645ec97c7b7.jpg"
          />
          <ServiceCard
            title="Commercial"
            imageSrc="/images/commercial-img.d06c2c08413d07428a9a.jpg"
          />
        </section>
      </Container>
    </main>
  );
}

function ServiceCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <article className="w-full">
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>

      <div className="mt-4 relative w-full aspect-[16/9] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </article>
  );
}
