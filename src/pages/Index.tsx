import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      id: 1,
      title: "Noise Cancelling Headphone",
      subtitle: "Boso Over Ear Headphone",
      description: "Wifi, Voice Assistant, Low latency game mode",
      cta: "buy now",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      bg: "from-gray-700 to-gray-900"
    },
    {
      id: 2,
      title: "aPodOs Work wonders with easy",
      subtitle: "Experience aPod 2023 with new technology from $769",
      cta: "discover now",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800",
      bg: "from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      title: "pc gaming cases",
      subtitle: "Sale up to 50% off",
      cta: "buy now",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800",
      bg: "from-red-600 to-pink-600"
    }
  ];

  // Countdown Timer
  const [countdown, setCountdown] = useState({ days: 162, hours: 9, minutes: 32, seconds: 34 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    "Laptops",
    "PC & Computers",
    "Cell Phones",
    "Tablets",
    "Gaming & VR",
    "Networking",
    "Cameras",
    "Sounds",
    "Office",
    "Storage, USB",
    "Accessories",
    "Clearance"
  ];

  const featuredProducts = [
    {
      title: "Sono Playgo 5",
      price: 400000,
      cta: "Discover now",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
    },
    {
      title: "Logitek Bluetooth Keyboard",
      subtitle: "Best for all device",
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    },
    {
      title: "Xomia Sport Water Resistance Watch",
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      title: "OKODo hero 11+ black",
      price: 690000,
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
    }
  ];

  const topCategories = [
    {
      title: "Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
      itemCount: 254
    },
    {
      title: "Smart Phones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      itemCount: 423
    },
    {
      title: "Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      itemCount: 342
    },
    {
      title: "Monitors",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300",
      itemCount: 189
    }
  ];

  const bestSellerProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "BOSO 2 Wireless On Ear Headphone",
      price: 45000,
      rating: 5,
      reviews: 152,
      badge: "free shipping",
      inStock: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      title: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
      price: 250000,
      originalPrice: 430000,
      rating: 5,
      reviews: 152,
      badge: "save Tsh 180,000",
      inStock: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400",
      title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
      price: 250000,
      originalPrice: 430000,
      rating: 4,
      reviews: 8,
      badge: "save Tsh 180,000",
      inStock: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      title: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case",
      price: 250000,
      originalPrice: 430000,
      rating: 5,
      reviews: 9,
      badge: "PRE ORDER",
      inStock: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
      title: "iSmart 24V Charger",
      price: 250000,
      originalPrice: 430000,
      rating: 4,
      reviews: 9,
      badge: "save $3.00",
      inStock: true
    }
  ];

  const cellphoneCategories = [
    { name: "iPhone (iOS)", count: 74 },
    { name: "Android", count: 35 },
    { name: "5G Support", count: 12 },
    { name: "Gaming", count: 9 },
    { name: "Xiaomi", count: 52 },
    { name: "Accessories", count: 29 }
  ];

  const laptopCategories = [
    { name: "Macbook", count: 74 },
    { name: "Gaming PC", count: 5 },
    { name: "Laptop Office", count: 22 },
    { name: "Laptop 15''", count: 55 },
    { name: "M1 2023", count: 32 },
    { name: "Secondhand", count: 16 }
  ];

  const audioCategories = [
    { name: "Speaker", count: 12 },
    { name: "DSLR Camera", count: 9 },
    { name: "Earbuds", count: 5 },
    { name: "Microphone", count: 12 }
  ];

  const gamingCategories = [
    { name: "Monitors", count: 28 },
    { name: "Chair", count: 12 },
    { name: "Controller", count: 9 },
    { name: "Keyboards", count: 30 }
  ];

  const officeCategories = [
    { name: "Printers", count: 9 },
    { name: "Network", count: 90 },
    { name: "Security", count: 12 },
    { name: "Projectors", count: 12 }
  ];

  const recentlyViewed = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      title: "Xomie Remid 8 Sport Water Resistance Watch",
      price: 25000,
      badge: "new"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
      title: "Microte Surface 2.0 Laptop",
      price: 457000,
      badge: "new"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
      title: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
      price: 320000,
      badge: "new"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      title: "SROK Smart Phone 128GB, Oled Retina",
      price: 438000,
      originalPrice: 570000,
      badge: "save $192.00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Slider Section with Category Sidebar */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Category Sidebar */}
              <div className="lg:col-span-3 bg-primary rounded-lg p-4">
                <h3 className="text-white font-bold mb-4 text-lg">All Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-white hover:text-white/80 text-sm w-full text-left py-1 transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Content Area - Slider + Right Cards */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-12 gap-4 mb-4">
                  {/* Main Hero Slider */}
                  <div className="col-span-12 md:col-span-8 relative">
                    <div className="relative h-[400px] bg-gradient-to-r from-red-500 to-orange-500 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-12">
                          <div className="bg-yellow-400 text-black inline-block px-6 py-2 rounded-full font-bold text-2xl mb-4">
                            SALE 50% OFF
                          </div>
                          <h2 className="text-5xl font-bold mb-4">{heroSlides[currentSlide].title}</h2>
                          <p className="text-xl mb-6">{heroSlides[currentSlide].subtitle}</p>
                          {heroSlides[currentSlide].description && (
                            <p className="mb-6">{heroSlides[currentSlide].description}</p>
                          )}
                          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-8">
                            {heroSlides[currentSlide].cta}
                          </Button>
                        </div>
                      </div>

                      {/* Slider Navigation */}
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full"
                      >
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full"
                      >
                        <ChevronRight className="h-6 w-6 text-white" />
                      </button>

                      {/* Slider Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {heroSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentSlide === index ? "bg-white w-8" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side Cards - First 2 products stacked */}
                  <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                    {featuredProducts.slice(0, 2).map((product, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex-1">
                        <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded mb-3" />
                        <h3 className="font-bold text-sm mb-1">{product.title}</h3>
                        {product.subtitle && <p className="text-xs text-gray-600 mb-1">{product.subtitle}</p>}
                        {product.price && (
                          <p className="text-primary font-bold mb-1 text-sm">from Tsh {product.price.toLocaleString()}</p>
                        )}
                        <Button variant="link" className="text-primary p-0 h-auto font-semibold text-xs">
                          {product.cta}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Cards - Remaining 2 products */}
                <div className="grid grid-cols-2 gap-4">
                  {featuredProducts.slice(2, 4).map((product, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded mb-3" />
                      <h3 className="font-bold text-sm mb-1">{product.title}</h3>
                      {product.subtitle && <p className="text-xs text-gray-600 mb-1">{product.subtitle}</p>}
                      {product.price && (
                        <p className="text-primary font-bold mb-1 text-sm">from Tsh {product.price.toLocaleString()}</p>
                      )}
                      <Button variant="link" className="text-primary p-0 h-auto font-semibold text-xs">
                        {product.cta}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Brands & Top Categories */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Featured Brands */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">featured brands</h2>
                  <Button variant="link" className="text-primary text-sm">
                    View All <ChevronRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {["Apple", "Samsung", "Xiaomi", "MSI", "Toshiba", "Asus", "Sony", "Canon"].map((brand) => (
                    <div key={brand} className="bg-white border rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                      <span className="font-semibold text-xs text-center">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Categories */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">top categories</h2>
                  <Button variant="link" className="text-primary text-sm">
                    View All <ChevronRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {topCategories.map((category) => (
                    <CategoryCard key={category.title} {...category} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deals of the Day */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Deals of the day</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured Deal */}
              <div className="lg:col-span-4 bg-gray-50 rounded-lg p-6">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    save $199.00
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
                    alt="Deal product"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-primary text-white rounded">free shipping</span>
                  <span className="text-xs px-2 py-1 bg-green-500 text-white rounded">free gift</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-sm text-gray-600">(12)</span>
                </div>
                <h3 className="font-bold mb-2">Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">$569.00</span>
                  <span className="text-lg text-gray-400 line-through">$759.00</span>
                </div>

                {/* Countdown Timer */}
                <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2 text-center">hurry up! Promotion will expires in</p>
                  <div className="flex justify-center gap-2 text-center">
                    <div>
                      <div className="bg-white rounded px-3 py-2 font-bold text-xl">{countdown.days}</div>
                      <span className="text-xs">d</span>
                    </div>
                    <div>
                      <div className="bg-white rounded px-3 py-2 font-bold text-xl">{countdown.hours}</div>
                      <span className="text-xs">h</span>
                    </div>
                    <div>
                      <div className="bg-white rounded px-3 py-2 font-bold text-xl">{countdown.minutes}</div>
                      <span className="text-xs">m</span>
                    </div>
                    <div>
                      <div className="bg-white rounded px-3 py-2 font-bold text-xl">{countdown.seconds}</div>
                      <span className="text-xs">s</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sold: 26/75</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>

              {/* Other Deals */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bestSellerProducts.slice(0, 6).map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className="relative mb-4">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
                        {product.badge && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            {product.badge}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                        ))}
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">Tsh {product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">Tsh {product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <p className={`text-xs mt-2 ${product.inStock ? 'text-green-600' : 'text-gray-500'}`}>
                        {product.inStock ? '✓ In stock' : 'Out of stock'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 rounded-lg p-4 text-center">
              <p className="text-sm">Member get <span className="font-bold">FREE SHIPPING*</span> with no order minimum!. *Restriction apply <button className="text-primary underline">Try free 30-days trial!</button></p>
            </div>
          </div>
        </section>

        {/* Best Seller */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Best seller</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {bestSellerProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand New For You */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">brand new for you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-8 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Zumac Steel Computer Case</h3>
                  <p className="mb-4">And an option to upgrade every three years</p>
                  <Button className="bg-white text-black hover:bg-white/90">shop now</Button>
                </div>
                <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300" alt="Case" className="w-32 h-32 object-cover rounded" />
              </div>
              <div className="bg-primary rounded-xl p-8 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">iPed Pro Mini 6</h3>
                  <p className="mb-2">Powerful in hand</p>
                  <p className="text-sm mb-4">From $19.99/month for 36 months</p>
                  <Button className="bg-white text-primary hover:bg-white/90">shop now</Button>
                </div>
                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300" alt="Tablet" className="w-32 h-32 object-cover rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* Summer Sale Banners */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-12 text-white">
                <h3 className="text-4xl font-bold mb-4">Summer Sale</h3>
                <p className="text-xl mb-2">with Sale up to 50% OFF</p>
                <p className="mb-4">for Foam Gaming Chair.</p>
                <p className="text-sm mb-6">Limited time offer. Hurry up</p>
                <Button size="lg" className="bg-white text-black hover:bg-white/90">shop now</Button>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-12 text-white">
                <h3 className="text-4xl font-bold mb-4">Summer Sale</h3>
                <p className="text-xl mb-2">with Sale up to 50% OFF</p>
                <p className="mb-4">for Foam Gaming Chair.</p>
                <p className="text-sm mb-6">Limited time offer. Hurry up</p>
                <Button size="lg" className="bg-white text-black hover:bg-white/90">shop now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Cellphones & Tablets */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">top cellphones & tablets</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured Banner */}
              <div className="lg:col-span-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">redmi note 12 Pro+ 5g</h3>
                <p className="mb-4">Rise to the challenge</p>
                <Button className="bg-white text-black hover:bg-white/90">shop now</Button>
              </div>

              {/* Category Filters and Products */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
                  {cellphoneCategories.map((cat) => (
                    <button key={cat.name} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center transition-colors">
                      <div className="font-semibold text-sm">{cat.name}</div>
                      <div className="text-xs text-gray-600">{cat.count} Items</div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bestSellerProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Laptops & Computers */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Best Laptops & Computers</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured Banner */}
              <div className="lg:col-span-3 bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">MacBook Air supercharged by M2</h3>
                <p className="mb-4">Start from Tsh 3,500,000</p>
                <Button className="bg-white text-black hover:bg-white/90">shop now</Button>
              </div>

              {/* Category Filters and Products */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
                  {laptopCategories.map((cat) => (
                    <button key={cat.name} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center transition-colors">
                      <div className="font-semibold text-sm">{cat.name}</div>
                      <div className="text-xs text-gray-600">{cat.count} Items</div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bestSellerProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audios & Cameras */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Audios & Cameras</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {audioCategories.map((cat) => (
                <button key={cat.name} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center transition-colors">
                  <div className="font-semibold text-sm">{cat.name}</div>
                  <div className="text-xs text-gray-600">{cat.count} Items</div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-12 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Best Speaker 2023</h3>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">shop now</Button>
            </div>
          </div>
        </section>

        {/* Gaming */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">gaming</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {gamingCategories.map((cat) => (
                <button key={cat.name} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center transition-colors">
                  <div className="font-semibold text-sm">{cat.name}</div>
                  <div className="text-xs text-gray-600">{cat.count} Items</div>
                </button>
              ))}
            </div>

            <div className="bg-black rounded-xl p-12 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">wireless rgb gaming mouse</h3>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">shop now</Button>
            </div>
          </div>
        </section>

        {/* Office Equipments */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">office equipments</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {officeCategories.map((cat) => (
                <button key={cat.name} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 text-center transition-colors">
                  <div className="font-semibold text-sm">{cat.name}</div>
                  <div className="text-xs text-gray-600">{cat.count} Items</div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-2">Home Theater 4k Laser Projector</h3>
              <p className="text-xl mb-4">10% Back</p>
              <p className="mb-6">Earn 10% Cash back on Swootech. Learn How</p>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">shop now</Button>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Download our app</h2>
              <p className="mb-6">Enter your phone number and we'll send you a download link.</p>
              <div className="flex gap-2 max-w-md">
                <input
                  type="tel"
                  placeholder="(+xx) xxx..."
                  className="flex-1 px-4 py-3 rounded-lg text-black"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                  send link
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">your recently viewed</h2>
              <Button variant="link" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recentlyViewed.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                    {product.badge && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        {product.badge}
                      </div>
                    )}
                    <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">Tsh {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">Tsh {product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Neverland Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Neverland #1 Online Marketplace for technology</h2>
              <p className="text-gray-700 mb-4">
                Neverland is a modern eCommerce platform designed to connect people and businesses with the latest technology products and solutions. From electronics and
                gadgets to digital tools and smart innovations, we make it easy to explore, shop, and grow in the digital world. Our mission is to empower users through technology
                offering quality, reliability, and affordable prices all in one trusted marketplace.
              </p>
              <p className="text-gray-700">
                Neverland is a modern eCommerce platform designed to connect people and businesses with the latest technology products and solutions. From electronics and gadgets to digital tools and
                smart innovations, we make it easy to explore, shop, and grow in the digital world. Our mission is to empower users through technology offering quality, reliability, and affordable prices all
                in one trusted marketplace.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
