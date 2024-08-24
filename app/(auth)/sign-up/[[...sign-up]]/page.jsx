import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1721036469059-ab07e6bb6508?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              &copy; Synnex
            </h2>

            <p className="mt-4 leading-relaxed text-black/90">
              "Where your WorkFlow, Flows!"
            </p>
          </div>
        </section>

        <main className="flex items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignUp />
        </main>
      </div>
    </section>
  );
}
