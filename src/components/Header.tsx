// src/components/Header.tsx
export const Header = () => (
  <header className="w-full">
    <nav className="mx-auto max-w-[1400px] px-12 py-8 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl tracking-tight font-normal text-zinc-900">
          (CYETA)
        </span>
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10 text-[13px] font-medium text-zinc-800">
          <li>
            <a className="hover:text-zinc-600 transition-colors" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-600 transition-colors" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-600 transition-colors" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-600 transition-colors" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-600 transition-colors" href="#">
              Contact us
            </a>
          </li>
        </ul>
        <button className="bg-[#9389e0] text-white px-6 py-2.5 text-[13px] font-medium rounded-sm hover:bg-[#8278d1] transition-colors">
          Request a Quote
        </button>
      </div>
    </nav>
  </header>
);
