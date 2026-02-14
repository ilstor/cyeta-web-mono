import type { ReactNode } from 'react';

type QuoteProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
};

export const Quote = ({
  title = 'Get a quote',
  subtitle = 'Tell us a bit about your project and we’ll get back to you shortly.',
}: QuoteProps) => {
  return (
    <section className="w-full">
      <div className="w-full rounded-2xl bg-[#2B2B2B] text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] p-6 sm:p-8">
        <header className="mb-5">
          <h2 className="text-base sm:text-lg font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-zinc-300 leading-6">{subtitle}</p>
          ) : null}
        </header>

        <form className="flex flex-col gap-4">
          <Field label="Service needed">
            <Select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="general-building-job">Feneral building job</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </Select>
          </Field>

          <Field label="Name">
            <Input placeholder="" autoComplete="name" />
          </Field>

          <Field label="Email">
            <Input type="email" placeholder="" autoComplete="email" />
          </Field>

          <Field label="Phone">
            <Input type="tel" placeholder="" autoComplete="tel" />
          </Field>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-zinc-900
                         hover:bg-zinc-100 active:bg-zinc-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

function Field({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold tracking-wide text-zinc-200">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        'w-full rounded-md',
        'bg-white text-zinc-900 placeholder:text-zinc-400',
        'border border-zinc-200',
        'px-3 py-2',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:border-zinc-300',
        className,
      ].join(' ')}
    />
  );
}
function Select({
  className = '',
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        'w-full rounded-md',
        'bg-white text-zinc-900 placeholder:text-zinc-400',
        'border border-zinc-200',
        'px-3 py-2',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:border-zinc-300',
        className,
      ].join(' ')}
    />
  );
}
