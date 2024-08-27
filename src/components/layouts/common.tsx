//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer"

export default function Common({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={`
        flex flex-col min-h-screen h-full
        sm:mx-auto sm:w-4/5 sm:max-w-2xl
      `}
    >
      <header className="p-2 bg-white border-b">
        <Header />
      </header>
      <main className="flex-1 p-2 bg-white">
        {children}
      </main>
      <footer className="p-2 bg-gray-400 text-white">
        <Footer />
      </footer>
    </div>
  );
}