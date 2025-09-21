export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-500 p-6">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-white text-5xl font-extrabold mb-4">
          Hello, Tailwind v4 + Next.js!
        </h1>
        <p className="text-blue-100 text-lg">
          Welcome to your awesome new project!
        </p>
      </header>

      {/* Main buttons */}
      <main className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-center text-blue-100">
        <p>Made with ❤️ using Next.js & Tailwind v4</p>
      </footer>
    </div>
  );
}

