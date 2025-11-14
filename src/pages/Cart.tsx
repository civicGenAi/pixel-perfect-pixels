import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X, ShoppingBag, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const subtotal = getTotal();
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const shipping = items.length > 0 ? 5000 : 0;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    // Mock coupon validation
    const validCoupons: { [key: string]: number } = {
      SAVE10: 10,
      SAVE20: 20,
      WELCOME15: 15,
    };

    const upperCode = couponCode.toUpperCase();
    if (validCoupons[upperCode]) {
      setAppliedCoupon({ code: upperCode, discount: validCoupons[upperCode] });
      toast({
        title: "Coupon Applied!",
        description: `You saved ${validCoupons[upperCode]}% on your order`,
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid",
        variant: "destructive",
      });
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast({
      title: "Coupon Removed",
      description: "Coupon code has been removed",
    });
  };

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
              <span className="text-foreground">Shopping Cart</span>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Add some products to your cart to see them here
                </p>
                <Link to="/">
                  <Button size="lg">Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </Link>

                        <div className="flex-1 min-w-0">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-semibold mb-2 hover:text-primary line-clamp-2">
                              {item.title}
                            </h3>
                          </Link>
                          <p className="text-lg font-bold text-primary mb-3">
                            TSH {item.price.toLocaleString()}
                          </p>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-md">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-4 font-medium">{item.quantity}</span>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold">
                            TSH {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="border rounded-lg p-6 sticky top-4">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                    {/* Coupon Code */}
                    <div className="mb-6">
                      <label className="text-sm font-medium mb-2 block">
                        Coupon Code
                      </label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          disabled={!!appliedCoupon}
                        />
                        {appliedCoupon ? (
                          <Button variant="outline" onClick={handleRemoveCoupon}>
                            Remove
                          </Button>
                        ) : (
                          <Button onClick={handleApplyCoupon}>Apply</Button>
                        )}
                      </div>
                      {appliedCoupon && (
                        <p className="text-sm text-primary mt-2">
                          ✓ Coupon "{appliedCoupon.code}" applied ({appliedCoupon.discount}% off)
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Try: SAVE10, SAVE20, or WELCOME15
                      </p>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6 pb-6 border-b">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">
                          TSH {subtotal.toLocaleString()}
                        </span>
                      </div>

                      {appliedCoupon && (
                        <div className="flex justify-between text-primary">
                          <span>Discount ({appliedCoupon.discount}%)</span>
                          <span>-TSH {discount.toLocaleString()}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium">
                          TSH {shipping.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between mb-6">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        TSH {total.toLocaleString()}
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <Link to="/checkout">
                      <Button className="w-full mb-3" size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>

                    <Link to="/">
                      <Button variant="outline" className="w-full" size="lg">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
