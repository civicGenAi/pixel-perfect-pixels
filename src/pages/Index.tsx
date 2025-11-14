import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Index = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      title: "Samsung Galaxy Note 3 Pro | Neo Black Quick Store",
      price: 165000,
      originalPrice: 200000,
      rating: 4,
      reviews: 52677,
      badge: "SALE",
      badgeVariant: "sale" as const,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      title: "Apple Smart Watch 6 Heart Rate Monitor",
      price: 150000,
      originalPrice: 180000,
      rating: 5,
      reviews: 423,
      badge: "BEST",
      badgeVariant: "best" as const,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      price: 190000,
      rating: 5,
      reviews: 738,
      badge: "HOT",
      badgeVariant: "hot" as const,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      title: "JBL FLIP 4 Waterproof Portable Bluetooth Speaker",
      price: 65000,
      originalPrice: 85000,
      rating: 4,
      reviews: 125,
    },
  ];

  const categories = [
    {
      title: "Laptop",
      itemCount: 254,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200",
    },
    {
      title: "Smartphone",
      itemCount: 423,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
    },
    {
      title: "Cameras",
      itemCount: 168,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200",
    },
    {
      title: "Headphones",
      itemCount: 342,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
    },
    {
      title: "Gaming",
      itemCount: 189,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=200",
    },
    {
      title: "Smart Watch",
      itemCount: 276,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
              <h2 className="text-5xl font-bold mb-4">Noise Cancelling</h2>
              <p className="text-2xl mb-6">Best shop for your gadgets</p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                SHOP NOW
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">FEATURED BRANDS</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {["Apple", "Samsung", "Xiaomi", "MSI", "Toshiba", "Asus", "Sony", "Canon"].map((brand) => (
                <div key={brand} className="bg-card border rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow">
                  <span className="font-semibold text-sm text-center">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">TOP CATEGORIES</h2>
              <Button variant="ghost" className="text-primary">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Best Seller */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">BEST SELLER</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">New</Button>
                <Button variant="outline" size="sm">Featured</Button>
                <Button variant="outline" size="sm">Top Rated</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banners */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-12 text-white">
                <h3 className="text-4xl font-bold mb-4">10% Back</h3>
                <p className="text-xl mb-6">For all electronics</p>
                <Button size="lg" variant="secondary" className="bg-white text-primary">
                  SHOP NOW
                </Button>
              </div>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-12 text-white">
                <h3 className="text-4xl font-bold mb-4">Download our app</h3>
                <p className="text-xl mb-6">Get exclusive offers</p>
                <Button size="lg" variant="secondary" className="bg-white text-primary">
                  DOWNLOAD
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* New Monthly Vendors */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">NEW MONTHLY VENDORS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
