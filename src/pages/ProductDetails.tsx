import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Heart, Star, ChevronRight, Minus, Plus } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: id || "1",
    title: "Samsung Galaxy Note 3 Pro | Neo Black Quick Store",
    price: 165000,
    originalPrice: 200000,
    rating: 4,
    reviews: 52677,
    badge: "SALE",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      "https://images.unsplash.com/photo-1592286927505-c1b79e2b10f6?w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
    ],
    description: "Experience the perfect blend of style and performance with the Samsung Galaxy Note 3 Pro. Featuring a stunning display, powerful processor, and advanced camera system, this device is designed to keep you connected and productive throughout your day.",
    inStock: true,
    category: "Smartphones",
    brand: "Samsung",
    sku: "SGNP-001-BLK",
  };

  const specifications = [
    { label: "Brand", value: "Samsung" },
    { label: "Model", value: "Galaxy Note 3 Pro" },
    { label: "Display", value: '6.5" Super AMOLED' },
    { label: "Processor", value: "Snapdragon 888" },
    { label: "RAM", value: "8GB" },
    { label: "Storage", value: "256GB" },
    { label: "Camera", value: "64MP + 12MP + 5MP" },
    { label: "Battery", value: "5000mAh" },
    { label: "OS", value: "Android 13" },
    { label: "Color", value: "Neo Black" },
  ];

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent phone! The camera quality is outstanding and battery life is impressive.",
    },
    {
      id: 2,
      author: "Sarah Smith",
      rating: 4,
      date: "2024-01-10",
      comment: "Great value for money. Fast performance and beautiful display.",
    },
    {
      id: 3,
      author: "Mike Johnson",
      rating: 5,
      date: "2024-01-05",
      comment: "Best phone I've owned. Highly recommended!",
    },
  ];

  const relatedProducts = [
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
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      title: "MacBook Pro 14-inch M2 Pro",
      price: 450000,
      rating: 5,
      reviews: 892,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Image Gallery */}
              <div>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white z-10">
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Product view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-primary">
                    TSH {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      TSH {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Product Meta */}
                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">SKU:</span>
                    <span className="text-sm font-medium">{product.sku}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Category:</span>
                    <span className="text-sm font-medium">{product.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Brand:</span>
                    <span className="text-sm font-medium">{product.brand}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Stock:</span>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center border rounded-md">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="lg" className="flex-1 min-w-[200px]">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                <Button size="lg" variant="secondary" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="description" className="mb-16">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Product Description</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <p className="text-muted-foreground mb-4">
                    The Samsung Galaxy Note 3 Pro represents the pinnacle of smartphone innovation. 
                    With its advanced features and sleek design, it's perfect for both professional 
                    and personal use. The device boasts cutting-edge technology that ensures smooth 
                    performance for all your daily tasks.
                  </p>
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Premium build quality with glass front and back</li>
                    <li>Lightning-fast performance for multitasking</li>
                    <li>Advanced camera system with AI enhancements</li>
                    <li>All-day battery life with fast charging support</li>
                    <li>Latest Android OS with regular security updates</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Specification</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{spec.label}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                  <div className="flex items-center gap-6 mb-8 p-6 bg-muted rounded-lg">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">
                        {product.rating}.0
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < product.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on {product.reviews} reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold mb-1">{review.author}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Write a Review
                </Button>
              </TabsContent>
            </Tabs>

            {/* Related Products */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {relatedProducts.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                      <ProductCard {...product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
