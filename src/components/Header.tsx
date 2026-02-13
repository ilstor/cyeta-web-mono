// src/components/Header.tsx
export const Header = () => (
  <header className="w-full border-b">
    <nav className="mx-auto max-w-5xl px-6 py-4 flex justify-end">
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>
          <a className="hover:underline underline-offset-4" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline underline-offset-4" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:underline underline-offset-4" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="hover:underline underline-offset-4" href="#">
            About us
          </a>
        </li>
        <li>
          <a className="hover:underline underline-offset-4" href="#">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
