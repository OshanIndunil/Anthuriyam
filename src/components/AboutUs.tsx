interface AboutUsProps {
  onBack: () => void;
}

const AboutUs = ({ onBack }: AboutUsProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f14] via-[#0d2818] to-[#0a1f14]">
      {/* Header */}
      <div className="bg-[#0a1f14] shadow-md sticky top-0 z-40 border-b-2 border-yellow-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-bold">Back to Home</span>
            </button>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              🌺 About Us
            </h1>
            
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          {/* Main Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Pushpa Blooms
            </h2>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-2">
              සොබාදහමේ අලංකාරය ඔබේ නිවසට
            </p>
            <p className="text-xl text-gray-300 italic">
              Nature's Beauty in Your Home
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/17.jpeg" alt="Anthurium Collection" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/18.jpeg" alt="Hybrid Flowers" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/19.jpeg" alt="Gift Packs" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/20.jpeg" alt="Decorative Pots" className="w-full h-48 object-cover" />
            </div>
          </div>

          {/* Content Section - Sinhala */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-yellow-500 rounded-full"></div>
                <h3 className="text-3xl font-bold text-yellow-400">අපි කවුද?</h3>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Pushpa Blooms වෙත සාදරයෙන් පිළිගනිමු! අපි උසස් තත්ත්වයේ ඇන්තුරියම් සහ විසිතුරු මල් පැළ සඳහා ඔබේ විශ්වාසවන්ත දේශීය සැපයුම්කරු වෙමු. විශේෂිත සෙවන දැල් යටතේ, හොඳින් ජලය බැසයන මාධ්‍යයක වගා කර, නිසි පොහොර සහ සත්කාර ලබා දෙමින් "Tropica", "Lumina" වැනි දීප්තිමත්, කල් පවතින Hybrid මල් වගා කිරීමට අපි කැපවී සිටිමු.
              </p>

              <div className="bg-yellow-500/10 rounded-xl p-6 mb-6 border-l-4 border-yellow-500">
                <p className="text-gray-200 text-lg leading-relaxed">
                  දිලීර රෝග සහ කොළ කහ වීම වැනි රෝග පාලනය කරමින් නිරෝගී පැළ ඔබට ලබා දීම අපගේ ප්‍රමුඛතාවයයි.
                </p>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                අලංකාර මැටි බඳුන්වල සරසන ලද අපගේ පැළ වැලන්ටයින්, මව්වරුන්ගේ දින, උපන් දින වැනි විශේෂ අවස්ථා සඳහා කදිම Gift Pack එකක් වනු ඇත. අපගේ Facebook සහ Instagram පිටු ඔස්සේ නවතම ඡායාරූප බලන්න.
              </p>

              <div className="flex items-center gap-4 bg-green-900/30 rounded-xl p-6">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">
                  ඔබට අවශ්‍ය පැළ නිවසටම ගෙන්වා ගැනීමට "Home Delivery" පහසුකම ද අප විසින් සලසා දී ඇත.
                </p>
              </div>
            </div>
          </div>

          {/* Content Section - English */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-yellow-500 rounded-full"></div>
                <h3 className="text-3xl font-bold text-yellow-400">Who We Are?</h3>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Welcome to Pushpa Blooms! We are your trusted local supplier for high-quality Anthuriums and ornamental flower plants. We are dedicated to cultivating vibrant, long-lasting hybrid flowers like "Tropica" and "Lumina," grown in well-draining media under specialized shade nets, with proper fertilization and care.
              </p>

              <div className="bg-yellow-500/10 rounded-xl p-6 mb-6 border-l-4 border-yellow-500">
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our priority is to provide you with healthy plants, effectively managing diseases such as fungus and leaf yellowing.
                </p>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Beautifully presented in decorative clay pots, our plants make the perfect Gift Packs for special occasions like Valentine's Day, Mother's Day, and birthdays. Check out our latest photos on our Facebook and Instagram pages.
              </p>

              <div className="flex items-center gap-4 bg-green-900/30 rounded-xl p-6">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">
                  We also offer convenient "Home Delivery" for your chosen plants.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Premium Quality</h4>
              <p className="text-gray-300">Hybrid varieties like Tropica & Lumina</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Expert Care</h4>
              <p className="text-gray-300">Disease management & proper cultivation</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Perfect Gifts</h4>
              <p className="text-gray-300">Beautiful gift packs for all occasions</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-gray-800 mb-6 text-lg">
                Explore our collection and bring home nature's finest creations today!
              </p>
              <button 
                onClick={onBack}
                className="bg-[#0a1f14] hover:bg-[#0d2818] text-white font-bold px-10 py-4 rounded-full transition-colors text-lg"
              >
                Start Shopping 🌿
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#0a1f14] border-t-2 border-yellow-500 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-300 mb-2">
            📍 Locally grown with care | 📱 Follow us on Facebook & Instagram
          </p>
          <p className="text-yellow-400 font-semibold">
            Pushpa Blooms - Where passion meets horticulture 🌺
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
