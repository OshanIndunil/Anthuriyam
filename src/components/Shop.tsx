import { useState } from 'react';
import { plantsData } from '../data/plants';

interface ShopProps {
  onBack: () => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Shop = ({ onBack }: ShopProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(plantsData.map(p => p.category))];

  const filteredPlants = plantsData.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (plant: typeof plantsData[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const phoneNumber = "94787036410";
    const orderDetails = cart.map(item => 
      `${item.name} x${item.quantity} - Rs.${item.price * item.quantity}`
    ).join('\n');
    const total = getTotalPrice();
    const message = `Hello Pushpa Blooms! I would like to order:\n\n${orderDetails}\n\nTotal: Rs.${total}\n\nIs this available?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
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
              <span className="font-bold hidden sm:inline">Back to Home</span>
            </button>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
              🌿 Shop Our Plants
            </h1>
            
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 bg-gradient-to-br from-green-800 to-emerald-700 rounded-2xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-green-600 bg-white/95 rounded-full focus:border-yellow-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-gray-900 shadow-lg'
                      : 'bg-white/90 text-green-800 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {filteredPlants.map((plant) => (
            <div 
              key={plant.id} 
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200 hover:border-yellow-500"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-200 to-emerald-200 overflow-hidden">
                <img 
                  src={plant.imageUrl} 
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                  {plant.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {plant.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold text-green-700">
                    Rs.{plant.price}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(plant)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-green-800 font-semibold">No plants found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:bg-yellow-700 p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-800">{getTotalItems()} item(s) in cart</p>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-xl text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 flex gap-4 border border-green-200">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-green-700 font-bold mb-2">Rs.{item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-green-200 hover:bg-green-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-green-800"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-green-200 hover:bg-green-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-green-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t-2 border-green-200 p-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="mb-4">
                <div className="flex justify-between text-lg mb-2">
                  <span className="text-green-700">Subtotal:</span>
                  <span className="font-bold text-green-800">Rs.{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-green-700">
                  <span>Total:</span>
                  <span>Rs.{getTotalPrice()}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Place Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cart Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Shop;
