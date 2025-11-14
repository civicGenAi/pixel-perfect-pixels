import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";

const Checkout = () => {
  const { items, getTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [showLoginNotice, setShowLoginNotice] = useState(true);
  const [showCouponNotice, setShowCouponNotice] = useState(true);

  const shippingFee = 25000; // TZS 25,000 for worldwide standard shipping
  const subtotal = getTotal();
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {" / "}
            <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
            {" / "}
            <span className="text-foreground font-medium">Checkout</span>
          </div>

          {/* Customer Notices */}
          <div className="mb-6 space-y-3">
            {showLoginNotice && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start justify-between">
                <p className="text-sm text-gray-700">
                  Returning customer?{" "}
                  <Link to="/login" className="text-primary font-semibold hover:underline">
                    Click here to log in
                  </Link>
                </p>
                <button
                  onClick={() => setShowLoginNotice(false)}
                  className="text-gray-400 hover:text-gray-600 ml-4"
                >
                  ×
                </button>
              </div>
            )}
            {showCouponNotice && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start justify-between">
                <p className="text-sm text-gray-700">
                  Have a coupon?{" "}
                  <button className="text-primary font-semibold hover:underline">
                    Click here to enter your code
                  </button>
                </p>
                <button
                  onClick={() => setShowCouponNotice(false)}
                  className="text-gray-400 hover:text-gray-600 ml-4"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Main Checkout Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Billing Details */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

              <form className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name (optional)
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Country / Region */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country / Region <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="country"
                    required
                    className="w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-primary focus:ring-primary bg-white"
                  >
                    <option value="">Select a country</option>
                    <option value="TZ">Tanzania</option>
                    <option value="KE">Kenya</option>
                    <option value="UG">Uganda</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>

                {/* Street Address */}
                <div className="space-y-2">
                  <Label htmlFor="address1" className="text-sm font-medium text-gray-700">
                    Street Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address1"
                    type="text"
                    placeholder="House number and street name"
                    required
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  <Input
                    id="address2"
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary mt-2"
                  />
                </div>

                {/* Town / City */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                    Town / City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* State / County */}
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State / County <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="state"
                    required
                    className="w-full h-11 rounded-lg border border-gray-300 px-3 focus:border-primary focus:ring-primary bg-white"
                  >
                    <option value="">Select a state</option>
                    <option value="Dar es Salaam">Dar es Salaam</option>
                    <option value="Arusha">Arusha</option>
                    <option value="Mwanza">Mwanza</option>
                    <option value="Dodoma">Dodoma</option>
                  </select>
                </div>

                {/* Zip Code */}
                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-sm font-medium text-gray-700">
                    Zip Code <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="zip"
                    type="text"
                    required
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+255 697 612 445"
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="h-11 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Create Account Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="createAccount"
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="createAccount" className="text-sm text-gray-700 cursor-pointer">
                    Create an account?
                  </label>
                </div>

                {/* Additional Information */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold mb-4">Additional Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="orderNotes" className="text-sm font-medium text-gray-700">
                      Order Notes (optional)
                    </Label>
                    <textarea
                      id="orderNotes"
                      rows={4}
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary & Payment */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Your Order</h2>

                {/* Order Items */}
                <div className="space-y-4 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  {items.length === 0 ? (
                    <p className="text-gray-500 text-sm py-4">Your cart is empty</p>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.title} × {item.quantity}
                        </span>
                        <span className="font-semibold text-gray-900">
                          Tsh {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Subtotal */}
                <div className="flex justify-between py-4 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    Tsh {subtotal.toLocaleString()}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between py-4 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Shipping</span>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      Tsh {shippingFee.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Worldwide Standard Shipping</p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between pt-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    Tsh {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-lg font-bold mb-6">Payment Methods</h3>

                <div className="space-y-3">
                  {/* Direct Bank Transfer */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "bank"
                        ? "bg-gray-50 border-primary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label className="font-medium text-gray-900 cursor-pointer flex-1">
                        Direct Bank Transfer
                      </label>
                    </div>
                    {paymentMethod === "bank" && (
                      <p className="text-sm text-gray-600 mt-3 ml-7">
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order will not be shipped until the funds
                        have cleared in our account.
                      </p>
                    )}
                  </div>

                  {/* Cash on Delivery */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "bg-gray-50 border-primary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label className="font-medium text-gray-900 cursor-pointer flex-1">
                        Cash on Delivery
                      </label>
                    </div>
                    {paymentMethod === "cod" && (
                      <p className="text-sm text-gray-600 mt-3 ml-7">
                        Pay with cash upon delivery. Please have the exact amount ready.
                      </p>
                    )}
                  </div>

                  {/* PayPal */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "bg-gray-50 border-primary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <label className="font-medium text-gray-900 cursor-pointer flex-1">
                        PayPal
                      </label>
                      <button className="text-xs text-primary hover:underline">
                        What's PayPal?
                      </button>
                    </div>
                    {paymentMethod === "paypal" && (
                      <p className="text-sm text-gray-600 mt-3 ml-7">
                        Pay via PayPal; you can pay with your credit card if you don't have a
                        PayPal account.
                      </p>
                    )}
                  </div>
                </div>

                {/* Privacy Policy Notice */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    Your personal data will be used to process your order, support your experience
                    throughout this website, and for other purposes described in our{" "}
                    <Link to="#" className="text-primary hover:underline font-medium">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all mt-6"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
