import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'shop' | 'about'>('home');

  // Show Gallery page if currentPage is 'gallery'
  if (currentPage === 'gallery') {
    return <Gallery onBack={() => setCurrentPage('home')} />;
  }

  // Show Shop page if currentPage is 'shop'
  if (currentPage === 'shop') {
    return <Shop onBack={() => setCurrentPage('home')} />;
  }

  // Show About Us page if currentPage is 'about'
  if (currentPage === 'about') {
    return <AboutUs onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black font-sans flex flex-col">
      <Header 
        onGalleryClick={() => setCurrentPage('gallery')} 
        onShopClick={() => setCurrentPage('shop')}
        onAboutClick={() => setCurrentPage('about')}
      />

      {/* Hero Section */}
      <section className="text-white relative overflow-hidden min-h-[70vh] md:min-h-screen flex items-center">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        >
          <source src="/background2.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto relative z-10 py-8 md:py-20 px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                Bring Nature's Elegance<br />to Your Home
              </h1>
              <p className="text-gray-200 text-lg max-w-xl drop-shadow-md">
                Welcome to Pushpa Blooms, where passion meets horticulture. Explore our curated collection of exquisite Anthuriums and rare ornamentals, cultivated with expert care to transform your spaces. Find your perfect green companion.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-colors"
                >
                 Explore Our Collection
                </button>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
                >
                 Buy Your Favorites
                </button>
              </div>
              
              {/* Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Guaranteed</p>
                    <p className="text-sm text-gray-300">Healthy</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Expert Planting</p>
                    <p className="text-sm text-gray-300">Advice</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Secure Local</p>
                    <p className="text-sm text-gray-300">Delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image - Anthurium Plant */}
            <div className="hidden lg:flex relative justify-end items-center">
              <img src="/Hero.png" alt="Plant Collection" className="w-auto h-[650px] object-contain object-right drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Expert Chat Button */}
      <button className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2 z-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="hidden sm:inline">Expert Chat Support</span>
      </button>
    </div>
  );
}

export default App;
