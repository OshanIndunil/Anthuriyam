import { useState } from 'react';

interface HeaderProps {
  onGalleryClick?: () => void;
  onShopClick?: () => void;
  onAboutClick?: () => void;
}

const Header = ({ onGalleryClick, onShopClick, onAboutClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a1f14] py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logoNew.png" alt="Pushpa Blooms Logo" className="h-12 sm:h-14 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          <button onClick={onShopClick} className="hover:text-yellow-400 transition-colors">Shop Plants</button>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Us</a>
          <button onClick={onAboutClick} className="hover:text-yellow-400 transition-colors">About Us</button>
          
          {/* Search Icon */}
          <button className="hover:text-yellow-400 transition-colors" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Browse Catalog Button */}
          <button 
            onClick={onGalleryClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Browse Catalog
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-green-700">
          <div className="flex flex-col space-y-3 pt-4 text-sm font-medium text-white">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors px-2 py-2">Home</a>
            <button onClick={() => { setIsMenuOpen(false); onShopClick?.(); }} className="hover:text-yellow-400 transition-colors px-2 py-2 text-left">Shop Plants</button>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors px-2 py-2">Contact Us</a>
            <button onClick={() => { setIsMenuOpen(false); onAboutClick?.(); }} className="hover:text-yellow-400 transition-colors px-2 py-2 text-left">About Us</button>
            <button 
              onClick={() => { 
                setIsMenuOpen(false); 
                onGalleryClick?.(); 
              }} 
              className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full text-center mt-2"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
