import Link from "next/link";

/**
 * Rendered inside the locale layout, so the header and footer stay. The copy is
 * bilingual side by side rather than guessing a locale from a route that failed
 * to match one.
 */
export default function NotFound() {
  return (
    <section className="container-page py-24 sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-3 max-w-[16ch] text-balance text-ink">
        Halaman tidak ditemukan.
      </h1>
      <p className="lede mt-3 max-w-[42ch]" lang="en">
        That page does not exist.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-[0.9375rem]">
        <Link href="/id" className="link-underline">
          Kembali ke beranda
        </Link>
        <Link href="/en" className="link-underline" lang="en">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
