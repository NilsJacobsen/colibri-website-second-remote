import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="min-h-[calc(100vh-64px-52px)] w-full lg:max-w-5xl mx-auto px-4">
        <div className="container">
          <Hero />
        </div>
      </main>

      <Footer />
    </div>
  );
}
