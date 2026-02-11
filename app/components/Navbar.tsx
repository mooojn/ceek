import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAFAFA] z-50 flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-200">
      <div className="text-2xl font-bold tracking-tighter text-black uppercase font-sans">
        <Link href="/">CEEK</Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[#333333] font-medium text-base">
        <Link href="/services" className="hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 transition-all">Services</Link>
        <Link href="/sectors" className="hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 transition-all">Sectors</Link>
        <Link href="/locations" className="hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 transition-all">Locations</Link>
        <Link href="/case-studies" className="hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 transition-all">Case Studies</Link>
        <Link href="/about-us" className="hover:text-black hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 transition-all">About Us</Link>
      </div>

      <div>
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
