import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex flex-col bg-black text-white">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The unfair advantage to the best brands in each sector.
          </h1>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
            Enquire Now
          </button>
        </div>
      </section>
      <Partners />
      <Services />
    </main>
  );
}
