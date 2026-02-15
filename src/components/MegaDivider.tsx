import type { ReactNode } from 'react';

type MegaDividerItem = {
  value: ReactNode;
  label: ReactNode;
  sublabel?: ReactNode;
};

type MegaDividerProps = {
  items?: MegaDividerItem[];
};

export const MegaDivider = ({
  items = [
    { value: '+5', label: 'Years experience', sublabel: 'in the industry' },
    { value: '+15', label: 'Projects completed', sublabel: 'across Auckland' },
    { value: '+22', label: 'Happy clients', sublabel: 'and counting' },
  ],
}: MegaDividerProps) => {
  return (
    <section className="w-full  bg-[#1A1A1A] my-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="py-3 sm:py-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-8 sm:gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-violet-400">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                    {item.label}
                  </div>
                  {item.sublabel ? (
                    <div className="mt-1 text-xs text-zinc-400">
                      {item.sublabel}
                    </div>
                  ) : null}
                </div>

                {idx < items.length - 1 ? (
                  <>
                    <div className="hidden sm:block absolute right-[-0.75rem] top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                    </div>
                    <div className="sm:hidden mx-auto mt-8">
                      <div className="w-2 h-2 rounded-full bg-white/60 mx-auto" />
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
