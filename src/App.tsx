import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'shop' | 'about'>('home');
  const [showChatMenu, setShowChatMenu] = useState(false);

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = "94787036410";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowChatMenu(false);
  };

  const helpQuestions = [
    {
      id: 1,
      question: "මල් පැල වගාව ගැන උපදෙස්",
      message: "Hello Pushpa Blooms, මට මල් පැල වගාව ගැන උපදෙස් ටිකක් ලබාගන්න පුළුවන්ද? (Can I get some advice about plant care?)"
    },
    {
      id: 2,
      question: "ඇන්තූරියම් වගාව පිළිබඳව විස්තර",
      message: "Hello Pushpa Blooms, ඇන්තූරියම් වගාව කරන ආකාරය ගැන විස්තරයක් දැනගන්න කැමතියි. (I would like to know details about Anthurium cultivation.)"
    },
    {
      id: 3,
      question: "පැල රෝග හා පාලන ක්‍රම",
      message: "Hello Pushpa Blooms, මගේ පැළවල රෝග ආ විට මොනවද කරන්න ඕන? උපදෙස් ටිකක් දෙන්න පුළුවන්ද? (What should I do when my plants get diseases? Can you give me some advice?)"
    }
  ];

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
      
      {/* Expert Chat Support Menu */}
      {showChatMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowChatMenu(false)}
          ></div>
          
          {/* Question Menu */}
          <div className="fixed bottom-24 right-8 bg-white rounded-2xl shadow-2xl z-50 w-80 overflow-hidden border-2 border-yellow-500">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
              <h3 className="text-gray-900 font-bold text-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                කොහොමද උදව්වක් අවශ්‍යද?
              </h3>
              <p className="text-gray-800 text-sm mt-1">How can we help you?</p>
            </div>
            
            <div className="p-3 space-y-2">
              {helpQuestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => sendWhatsAppMessage(item.message)}
                  className="w-full text-left p-4 rounded-xl bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-400 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.question}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                ප්‍රශ්නයක් තෝරා WhatsApp හරහා අප හා සම්බන්ධ වන්න
              </p>
            </div>
          </div>
        </>
      )}
      
      {/* Floating Expert Chat Button */}
      <button 
        onClick={() => setShowChatMenu(!showChatMenu)}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2 z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="hidden sm:inline">Expert Chat Support</span>
      </button>
    </div>
  );
}

export default App;
