import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { getItemCount } = useCart();
  return (
    <header className="w-full bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Hotline 24/7: +255697612445</span>
          <div className="flex gap-6">
            <Link to="#" className="hover:underline">Sell on Neverland</Link>
            <Link to="#" className="hover:underline">Track Order</Link>
            <span>USD</span>
            <span>Eng</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl">NEVERLAND</span>
              <span className="text-xs text-muted-foreground">MARKETPLACE</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              HOMES
            </Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">
              PAGES
            </Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">
              PRODUCTS
            </Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="gap-2">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">LOG IN / REGISTER</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-md bg-white min-w-[160px]">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
            </select>
            <div className="flex-1 relative">
              <Input
                type="search"
                placeholder="Search anything..."
                className="w-full bg-white"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full bg-primary hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="mt-3 flex justify-between text-primary-foreground text-sm">
            <span>CASH ON DELIVERY</span>
            <span>30 DAYS MONEY BACK</span>
            <span>100% SECURE PAYMENT</span>
          </div>
        </div>
      </div>
    </header>
  );
};
