import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import WhoAreCeek from "./components/WhoAreCeek";
import CaseStudies from "./components/CaseStudies";
import WorkTogether from "./components/WorkTogether";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#211F22] text-white">
      <Navbar />
      <section className="bg-[#211F22] min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-xl mx-auto mt-10">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1] mb-10 tracking-tight text-left">
            From Clicks to Customers — We Handle Everything.
          </h1>
          <Link href="/get-in-touch" className="inline-block mt-6">
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
            Enquire Now
          </button>
          </Link>
        </div>
      </section>
      <Partners />
      <Services />
      <WhoAreCeek />
      <CaseStudies />
      <WorkTogether />
      {/* <Philosophy /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
