import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-100">
      <div className="text-2xl font-bold tracking-tighter text-black">
        <Link href="/">CEEK</Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-black font-medium">
        <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
        <Link href="/sectors" className="hover:text-gray-600 transition-colors">Sectors</Link>
        <Link href="/locations" className="hover:text-gray-600 transition-colors">Locations</Link>
        <Link href="/case-studies" className="hover:text-gray-600 transition-colors">Case Studies</Link>
        <Link href="/about-us" className="hover:text-gray-600 transition-colors">About Us</Link>
      </div>

      <div>
        <Link 
          href="/contact" 
          className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
