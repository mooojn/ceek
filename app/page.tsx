import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import WhoAreCeek from "./components/WhoAreCeek";
import CaseStudies from "./components/CaseStudies";
import WorkTogether from "./components/WorkTogether";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-12 leading-[1.1]">
            The unfair advantage to the best brands in each sector.
          </h1>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300">
            Enquire Now
          </button>
        </div>
      </section>
      <Partners />
      <Services />
      <WhoAreCeek />
      <CaseStudies />
      <WorkTogether />
      <Philosophy />
      <CTA />
      <Footer />
    </main>
  );
}
