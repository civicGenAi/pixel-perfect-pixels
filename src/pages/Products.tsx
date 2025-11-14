import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  List,
  Star,
  Heart,
  BarChart3,
  ShoppingCart,
  Check
} from "lucide-react";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedView, setSelectedView] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample product data
  const products = [
    {
      id: 1,
      title: "Samsung Galaxy Z Fold5 5G",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300",
      oldPrice: 1999.00,
      newPrice: 1799.00,
      discount: 199.00,
      rating: 4.5,
      reviews: 738,
      category: "Cell Phones",
      shipping: "free shipping",
      stock: "In stock",
      badge: "Hot"
    },
    {
      id: 2,
      title: "Apple iPhone 14 Pro Max 256GB",
      image: "https://images.unsplash.com/photo-1592286927505-2fd5de9b2116?w=300",
      oldPrice: 1399.00,
      newPrice: 1199.00,
      discount: 200.00,
      rating: 5,
      reviews: 1240,
      category: "iPhone",
      shipping: "free shipping",
      stock: "In stock",
      badge: "Best Seller"
    },
    {
      id: 3,
      title: "Xiaomi 13 Pro 5G 512GB",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      oldPrice: 899.00,
      newPrice: 749.00,
      discount: 150.00,
      rating: 4,
      reviews: 456,
      category: "Xiaomi",
      shipping: "$2.98 shipping",
      stock: "In stock"
    },
    {
      id: 4,
      title: "ASUS ROG Phone 7 Ultimate",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300",
      oldPrice: 1299.00,
      newPrice: 1099.00,
      discount: 200.00,
      rating: 5,
      reviews: 892,
      category: "Gaming Smartphone",
      shipping: "free shipping",
      stock: "Pre-order"
    },
    {
      id: 5,
      title: "Samsung Galaxy Tab S9 Ultra",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300",
      oldPrice: 1199.00,
      newPrice: 999.00,
      discount: 200.00,
      rating: 4.5,
      reviews: 234,
      category: "Samsung Tablets",
      shipping: "free shipping",
      stock: "In stock"
    },
    {
      id: 6,
      title: "Apple iPad Pro 12.9\" M2 Chip",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
      oldPrice: 1099.00,
      newPrice: 949.00,
      discount: 150.00,
      rating: 5,
      reviews: 987,
      category: "iPad",
      shipping: "free shipping",
      stock: "In stock",
      badge: "Featured"
    },
    {
      id: 7,
      title: "OnePlus 11 5G 256GB",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300",
      oldPrice: 799.00,
      newPrice: 649.00,
      discount: 150.00,
      rating: 4,
      reviews: 456,
      category: "Cell Phones",
      shipping: "$2.98 shipping",
      stock: "In stock"
    },
    {
      id: 8,
      title: "Google Pixel 8 Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300",
      oldPrice: 999.00,
      newPrice: 849.00,
      discount: 150.00,
      rating: 4.5,
      reviews: 623,
      category: "Cell Phones",
      shipping: "free shipping",
      stock: "In stock"
    }
  ];

  // Category chips
  const categoryChips = [
    { name: "iPhone (iOS)", count: 74, icon: "📱" },
    { name: "Android", count: 35, icon: "🤖" },
    { name: "Gaming", count: 9, icon: "🎮" },
    { name: "Xiaomi", count: 52, icon: "📱" },
    { name: "Accessories", count: 29, icon: "🎧" },
    { name: "Samsung Tablets", count: 26, icon: "📱" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        {/* Hero Banner Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Hero Product */}
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-2">WIRELESS AUDIO</p>
                  <h1 className="text-5xl font-bold mb-4">Noise Cancelling Headphone</h1>
                  <p className="text-blue-100 text-lg">
                    Experience premium sound quality with active noise cancellation
                  </p>
                </div>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                  Buy Now
                </Button>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Right - Hero Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600"
                  alt="Headphones"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* REDMI Promo Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">REDMI Note 12 Pro+ 5G</h2>
                <p className="text-white/90">Flagship Performance, Unbeatable Price</p>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Sidebar Filters */}
              <aside className="lg:col-span-1 space-y-6">
                {/* Categories Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div className="font-semibold text-primary mb-3">All Categories</div>
                    <div className="space-y-2 pl-3">
                      <div className="font-semibold mb-2">Cell Phones & Tablets</div>
                      <div className="space-y-1.5 pl-3 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>iPhone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Samsung</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Xiaomi</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Asus</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Oppo</span>
                        </label>
                      </div>
                      <div className="font-medium text-sm mt-2">Gaming Smartphone</div>
                      <div className="font-medium text-sm">iPad</div>
                      <div className="font-medium text-sm">Windows Tablets</div>
                      <div className="font-medium text-sm">eReader</div>
                      <div className="font-medium text-sm">Smartphone Chargers</div>
                      <div className="font-medium text-sm">Accessories</div>
                    </div>
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={2000}
                      step={10}
                      className="my-4"
                    />
                    <div className="flex gap-3">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="h-10"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="h-10"
                      />
                    </div>
                    <Button className="w-full" size="sm">Apply</Button>
                  </div>
                </div>

                {/* Ratings Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Ratings</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <div className="flex items-center gap-1">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Screen Size Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Screen Size</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>7" & Under</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>7.1" – 8.9"</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>9" – 10.9"</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>11" & Greater</span>
                    </label>
                  </div>
                </div>

                {/* Colors Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Colors</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Black", color: "#000000" },
                      { name: "White", color: "#FFFFFF" },
                      { name: "Blue", color: "#3B82F6" },
                      { name: "Red", color: "#EF4444" },
                      { name: "Green", color: "#10B981" },
                      { name: "Gold", color: "#F59E0B" },
                      { name: "Silver", color: "#9CA3AF" },
                      { name: "Purple", color: "#8B5CF6" }
                    ].map((color) => (
                      <button
                        key={color.name}
                        className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-primary transition-all hover:scale-110"
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Memory Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Memory</h3>
                  <div className="space-y-2 text-sm">
                    {["12GB", "8GB", "6GB", "4GB", "3GB", "2GB"].map((memory) => (
                      <label key={memory} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{memory}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Condition Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-lg mb-4">Condition</h3>
                  <div className="space-y-2 text-sm">
                    {["New", "Like New", "Open Box"].map((condition) => (
                      <label key={condition} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-6">
                {/* Category Chips */}
                <div className="flex flex-wrap gap-3">
                  {categoryChips.map((chip) => (
                    <button
                      key={chip.name}
                      className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all shadow-sm"
                    >
                      <span className="mr-2">{chip.icon}</span>
                      <span className="font-medium text-sm">{chip.name}</span>
                      <span className="ml-2 text-xs text-gray-500">({chip.count} Items)</span>
                    </button>
                  ))}
                </div>

                {/* Sorting and View Options */}
                <div className="bg-white rounded-xl p-4 shadow-sm border flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    1 - {Math.min(itemsPerPage, products.length * 5)} of {products.length * 5} results
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    {/* Sort Dropdown */}
                    <select className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Sort by: Default</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                      <option>Best Rating</option>
                    </select>

                    {/* View Toggle */}
                    <div className="flex gap-1 border border-gray-200 rounded-lg p-1">
                      <Button
                        size="icon"
                        variant={selectedView === "grid" ? "default" : "ghost"}
                        className="h-8 w-8"
                        onClick={() => setSelectedView("grid")}
                      >
                        <Grid3x3 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant={selectedView === "list" ? "default" : "ghost"}
                        className="h-8 w-8"
                        onClick={() => setSelectedView("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Items per page */}
                    <select
                      className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                      <option value={24}>24 per page</option>
                      <option value={48}>48 per page</option>
                      <option value={72}>72 per page</option>
                    </select>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all group overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            {product.badge}
                          </span>
                        )}
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </Link>

                        {/* Quick Actions */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="h-9 w-9 bg-white hover:bg-primary hover:text-white shadow-md">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-9 w-9 bg-white hover:bg-primary hover:text-white shadow-md">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 space-y-2">
                        {/* Category */}
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>

                        {/* Title */}
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-colors">
                            {product.title}
                          </h3>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-primary">
                            ${product.newPrice.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        </div>

                        {/* Discount Badge */}
                        <p className="text-xs text-green-600 font-medium">
                          Save ${product.discount.toFixed(2)}
                        </p>

                        {/* Shipping */}
                        <p className="text-xs text-gray-600">{product.shipping}</p>

                        {/* Stock Status */}
                        <div className="flex items-center gap-1.5">
                          {product.stock === "In stock" && (
                            <>
                              <Check className="h-3 w-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">{product.stock}</span>
                            </>
                          )}
                          {product.stock === "Pre-order" && (
                            <span className="text-xs text-blue-600 font-medium">{product.stock}</span>
                          )}
                          {product.stock === "Out of stock" && (
                            <span className="text-xs text-red-600 font-medium">{product.stock}</span>
                          )}
                        </div>

                        {/* Add to Cart Button */}
                        <Button className="w-full mt-3 bg-primary hover:bg-primary/90" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </Button>
                    {[1, 2, 3, 4].map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                    <span className="text-gray-400">...</span>
                    <Button variant="outline" size="sm" className="w-10">
                      10
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 10}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </div>

                {/* Featured Banner / Promo Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                    <div className="text-white space-y-4">
                      <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                        BEST SELLER
                      </span>
                      <h2 className="text-4xl font-bold">OKODO Hero 11+ 5K Wireless</h2>
                      <p className="text-white/90 text-lg">
                        Capture life's moments in stunning 5K resolution
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-white/80">From</span>
                        <span className="text-5xl font-bold">$169</span>
                      </div>
                      <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-semibold">
                        Shop Now
                      </Button>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600"
                        alt="OKODO Hero 11+"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
