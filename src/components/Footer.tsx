// src/components/Footer.tsx
type FooterProps = {
  text?: string;
};

export const Footer = ({ text = "Dummy footer" }: FooterProps) => (
  <footer className="w-full border-t">
    <div className="mx-auto max-w-5xl px-6 py-4 text-right text-sm text-zinc-600 dark:text-zinc-400">
      {text}
    </div>
  </footer>
);
