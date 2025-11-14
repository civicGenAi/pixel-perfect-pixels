import { Facebook, Twitter, Instagram, Youtube, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">NEVERLAND - TANZANIAN MARKETPLACE</h3>
            <p className="text-sm text-muted-foreground mb-2">HOTLINE 24/7</p>
            <p className="text-primary font-bold text-xl mb-4">+255697612445</p>
            <p className="text-sm text-muted-foreground mb-4">
              257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
              <br />
              contact@Swootechmart.com
            </p>
            <div className="flex gap-2">
              <Button variant="default" size="icon" className="rounded-full bg-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full bg-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full bg-primary">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full bg-primary">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="font-bold text-sm mb-4">TOP CATEGORIES</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary">Laptops</Link></li>
              <li><Link to="#" className="hover:text-primary">PC & Computers</Link></li>
              <li><Link to="#" className="hover:text-primary">Cell Phones</Link></li>
              <li><Link to="#" className="hover:text-primary">Tablets</Link></li>
              <li><Link to="#" className="hover:text-primary">Gaming & VR</Link></li>
              <li><Link to="#" className="hover:text-primary">Networks</Link></li>
              <li><Link to="#" className="hover:text-primary">Cameras</Link></li>
              <li><Link to="#" className="hover:text-primary">Sounds</Link></li>
              <li><Link to="#" className="hover:text-primary">Office</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary">About Swoo</Link></li>
              <li><Link to="#" className="hover:text-primary">Contact</Link></li>
              <li><Link to="#" className="hover:text-primary">Career</Link></li>
              <li><Link to="#" className="hover:text-primary">Blog</Link></li>
              <li><Link to="#" className="hover:text-primary">Sitemap</Link></li>
              <li><Link to="#" className="hover:text-primary">Store Locations</Link></li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-bold text-sm mb-4">HELP CENTER</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary">Customer Service</Link></li>
              <li><Link to="#" className="hover:text-primary">Policy</Link></li>
              <li><Link to="#" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-primary">Track Order</Link></li>
              <li><Link to="#" className="hover:text-primary">FAQs</Link></li>
              <li><Link to="#" className="hover:text-primary">My Account</Link></li>
              <li><Link to="#" className="hover:text-primary">Product Support</Link></li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className="font-bold text-sm mb-4">PARTNER</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary">Become Seller</Link></li>
              <li><Link to="#" className="hover:text-primary">Affiliate</Link></li>
              <li><Link to="#" className="hover:text-primary">Advertise</Link></li>
              <li><Link to="#" className="hover:text-primary">Partnership</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold mb-2">SUBSCRIBE & GET <span className="text-primary">10% OFF</span> FOR YOUR FIRST ORDER</h3>
              <p className="text-sm text-muted-foreground">By subscribing, you've accepted the our Policy</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input placeholder="Enter your email address" className="min-w-[300px]" />
              <Button className="bg-primary hover:bg-primary/90">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Shawonict3. All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
          </div>
          <Link to="#" className="text-sm text-primary hover:underline">Mobile Site</Link>
        </div>
      </div>
    </footer>
  );
};
