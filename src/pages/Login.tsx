import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShoppingBag, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {" / "}
            <Link to="#" className="hover:text-primary transition-colors">pages</Link>
            {" / "}
            <span className="text-foreground font-medium">login</span>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Illustration */}
              <div className="bg-gradient-to-br from-primary via-blue-600 to-purple-600 p-12 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center text-white mb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-lg">
                      <ShoppingBag className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Welcome to Neverland</h2>
                  <p className="text-lg text-white/90 mb-6">Your premium marketplace for technology</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Secure Shopping Experience</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Track Your Orders</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Exclusive Deals & Offers</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute bottom-32 left-16 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
              </div>

              {/* Right Side - Form */}
              <div className="p-12 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                  <p className="text-gray-600">Login to access your account</p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="h-12 pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 pl-10 pr-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link to="#" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Sign In
                  </Button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 border-2 hover:bg-gray-50 rounded-lg transition-all group"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          className="text-[#4285F4]"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          className="text-[#34A853]"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          className="text-[#FBBC05]"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          className="text-[#EA4335]"
                        />
                      </svg>
                      Google
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 border-2 hover:bg-gray-50 rounded-lg transition-all group"
                    >
                      <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                      Sign Up Now
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
