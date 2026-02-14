// src/components/Footer.tsx
export const Footer = () => (
  <footer className="w-full bg-[#1A1A1A] text-white py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">
            Auckland, New Zealand
          </h3>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase leading-relaxed">
            Contact us
          </h3>
          <p className="text-sm text-zinc-400">022 410 9004</p>
          <p className="text-sm text-zinc-400">cyetaltd@gmail.com</p>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase leading-relaxed">
            Services
          </h3>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Subcontracting</li>
          </ul>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Enter you email for a free quote"
              className="w-full bg-transparent border-b border-zinc-700 pb-2 pr-8 text-sm focus:outline-none"
            />
            <span className="absolute right-0 bottom-3 text-zinc-400">↗</span>
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            © 2024 Cyeta LTD. All rights reserved
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-8 flex items-center justify-center">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-medium uppercase tracking-widest">
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);
