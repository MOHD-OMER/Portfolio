import Link from "next/link";

// Without this file Next.js serves its own unstyled 404, which lands a visitor
// on a white page that looks nothing like the rest of the site.
export const metadata = {
  title: "Page not found | Mohammed Abdul Omer",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="main-container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        404
      </p>

      <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
        This page doesn&apos;t exist
      </h1>

      <p className="mt-3 max-w-md text-gray-400">
        The link may be out of date, or the address slightly off. Everything on
        this site lives on the home page.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-transform hover:scale-105"
        >
          Back to home
        </Link>
        <Link
          href="/#projects"
          className="rounded-full border border-blue-500/50 px-6 py-3 text-sm font-semibold text-blue-400 transition-colors hover:bg-blue-500/10"
        >
          View projects
        </Link>
      </div>
    </section>
  );
}
