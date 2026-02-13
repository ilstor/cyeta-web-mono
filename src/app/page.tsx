import { ArticleWithImage } from '@/components/ArticleWithImage';
import { Divider } from '@/components/Divider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 grid place-items-center px-12 sm:px-16 lg:px-24">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <ArticleWithImage
                imagePosition="left"
                imageFileName="index-hero.2e391830a0091286404a.jpg"
              >
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  About us
                </h2>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Text/content is passed as children.
                </p>
              </ArticleWithImage>

              <Divider />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
