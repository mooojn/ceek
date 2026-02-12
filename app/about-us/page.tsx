import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import ClientLogos from '../components/ClientLogos';
import Timeline from '../components/Timeline';
import HowToWorkWithCeek from '../components/HowToWorkWithCeek';
import CTA from '../components/CTA';

export default function AboutUs() {
  return (
    <main className="flex flex-col min-h-screen bg-[#111111]">
      <Navbar />
      <div className="pt-20"> 
        <AboutHero />
        <ClientLogos />
        <Timeline />
        <HowToWorkWithCeek />
      </div>
      <CTA 
        title="BECOME A Marketo360 CLIENT"
        text="Marketo360 offer bespoke digital marketing services across multiple sectors and industries. Contact us today to align on business goals and scale your brand’s digital presence and revenue."
      />
      <Footer />
    </main>
  );
}
