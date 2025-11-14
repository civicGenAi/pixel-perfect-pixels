import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  badge?: string;
  badgeVariant?: "sale" | "hot" | "best";
}

export const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  rating = 5,
  reviews = 0,
  badge,
  badgeVariant = "sale",
}: ProductCardProps) => {
  const getBadgeColor = () => {
    switch (badgeVariant) {
      case "sale":
        return "bg-blue-500";
      case "hot":
        return "bg-red-500";
      case "best":
        return "bg-orange-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="group relative bg-card rounded-lg border p-4 hover:shadow-lg transition-all">
      {badge && (
        <Badge className={`absolute top-6 left-6 ${getBadgeColor()} text-white z-10`}>
          {badge}
        </Badge>
      )}
      
      {/* Image Container */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-md bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Add to Cart Button */}
        <Button
          className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-primary cursor-pointer">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          {reviews > 0 && (
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            TSH {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              TSH {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
