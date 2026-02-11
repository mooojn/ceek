import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-12 leading-relaxed">
            The unfair advantage to the best brands in each sector.
          </h1>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300">
            Enquire Now
          </button>
        </div>
      </section>
      <Partners />
      <Services />
      <CaseStudies />
      <Philosophy />
      <Footer />
    </main>
  );
}
