import { Search, ShoppingCart, User, Heart, Menu, TruckIcon, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { getItemCount } = useCart();
  return (
    <header className="w-full bg-background">
      {/* Top Bar - Curved with rounded bottom */}
      <div className="bg-primary text-primary-foreground py-2.5 rounded-b-2xl shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium">
          <span className="font-semibold">Hotline 24/7 +255697612445</span>
          <div className="flex gap-6 items-center">
            <Link to="#" className="hover:text-white/80 transition-colors">Sell on Neverland</Link>
            <Link to="#" className="hover:text-white/80 transition-colors">Track Order</Link>
            <select className="bg-transparent border-none text-primary-foreground font-medium cursor-pointer focus:outline-none">
              <option className="text-black">USD</option>
              <option className="text-black">TZS</option>
              <option className="text-black">EUR</option>
            </select>
            <select className="bg-transparent border-none text-primary-foreground font-medium cursor-pointer focus:outline-none">
              <option className="text-black">ENG</option>
              <option className="text-black">SWA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">NEVERLAND</span>
                <span className="text-[10px] text-muted-foreground tracking-wide">MARKETPLACE</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm font-semibold hover:text-primary transition-colors">
                About
              </Link>
              <Link to="#" className="text-sm font-semibold hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm font-semibold hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side - Welcome/Login & Cart */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link to="/login" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <User className="h-4 w-4" />
                <span>Welcome / Login / Register</span>
              </Link>
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                  <ShoppingCart className="h-5 w-5" />
                  {getItemCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {getItemCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section with rounded styling */}
      <div className="bg-primary py-5 rounded-b-2xl shadow-md">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="flex gap-2 mb-4">
            <select className="px-4 py-2.5 rounded-lg bg-white min-w-[170px] text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer shadow-sm">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
              <option>Cell Phones</option>
              <option>Laptops</option>
              <option>Gaming</option>
            </select>
            <div className="flex-1 relative">
              <Input
                type="search"
                placeholder="Search anything…"
                className="w-full bg-white rounded-lg pl-4 pr-12 py-2.5 text-sm border-none focus:ring-2 focus:ring-primary/50 shadow-sm"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full bg-primary hover:bg-primary/90 rounded-l-none rounded-r-lg shadow-sm"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-between items-center text-primary-foreground">
            <div className="flex items-center gap-2">
              <TruckIcon className="h-5 w-5" />
              <span className="text-xs font-semibold tracking-wide">CASH ON DELIVERY</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              <span className="text-xs font-semibold tracking-wide">30 DAYS MONEY BACK</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-semibold tracking-wide">100% SECURE PAYMENT</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
