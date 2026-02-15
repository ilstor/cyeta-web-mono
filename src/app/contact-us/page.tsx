import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';

export default function Page() {
  return (
    <main className="flex-1">
      <Container className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact us
        </h1>

        <div className="mt-6 rounded-xl bg-white/60 dark:bg-white/10 p-6">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Auckland, New Zealand
          </h2>

          <Paragraph className="mt-3" muted>
            022 410 9004
          </Paragraph>

          <Paragraph className="mt-2" muted>
            cyetaltd@gmail.com
          </Paragraph>
        </div>
      </Container>
    </main>
  );
}
