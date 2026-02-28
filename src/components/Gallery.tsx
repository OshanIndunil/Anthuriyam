import { useState } from 'react';

interface GalleryProps {
  onBack: () => void;
}

const Gallery = ({ onBack }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Array of all flower images
  const images = [
    { id: 1, src: '/1.jpg', title: 'Beautiful Anthurium' },
    { id: 2, src: '/2.jpg', title: 'Red Anthurium' },
    { id: 3, src: '/3.jpeg', title: 'Pink Flowers' },
    { id: 4, src: '/4.jpeg', title: 'White Peace Lily' },
    { id: 5, src: '/5.jpeg', title: 'Tropical Plant' },
    { id: 6, src: '/6.jpg', title: 'Green Anthurium' },
    { id: 7, src: '/7.jpeg', title: 'Exotic Blooms' },
    { id: 8, src: '/8.jpeg', title: 'Rare Species' },
    { id: 9, src: '/9.jpeg', title: 'Garden Flowers' },
    { id: 10, src: '/10.jpeg', title: 'Colorful Collection' },
    { id: 11, src: '/11.jpeg', title: 'Natural Beauty' },
    { id: 12, src: '/12.jpeg', title: 'Fresh Blooms' },
    { id: 13, src: '/13.jpeg', title: 'Vibrant Plants' },
    { id: 14, src: '/14.jpeg', title: 'Indoor Plants' },
    { id: 15, src: '/15.jpeg', title: 'Decorative Flowers' },
    { id: 16, src: '/16.jpg', title: 'Premium Collection' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-green-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-bold">Back to Home</span>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Our Collection</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Beautiful Flowers
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Discover our curated collection of exquisite plants and flowers, each carefully selected for their beauty and quality.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <div className="aspect-square overflow-hidden bg-gray-800">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-yellow-400 text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            className="absolute left-6 text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev! > 0 ? prev! - 1 : images.length - 1);
            }}
            disabled={selectedImage === 0}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-6 text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev! < images.length - 1 ? prev! + 1 : 0);
            }}
            disabled={selectedImage === images.length - 1}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-5xl max-h-[90vh]">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].title}
              className="max-h-[90vh] w-auto mx-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-xl font-bold">
              {images[selectedImage].title}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
