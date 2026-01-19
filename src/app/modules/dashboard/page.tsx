export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
              Dashboard
            </h1>
            <nav className="flex items-center gap-4">
              <a
                href="/auth/login"
                className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Logout
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Welcome to your Dashboard
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            This is your main dashboard page. You can add your content here.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">
              Card 1
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Add your content here
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">
              Card 2
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Add your content here
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">
              Card 3
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Add your content here
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
