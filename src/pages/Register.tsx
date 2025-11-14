import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {" / "}
            <Link to="#" className="hover:text-primary transition-colors">pages</Link>
            {" / "}
            <span className="text-foreground font-medium">register</span>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Illustration */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <svg viewBox="0 0 400 400" className="w-full h-auto">
                    {/* Credit Card */}
                    <rect x="100" y="280" width="120" height="80" rx="8" fill="#4A90E2" />
                    <text x="160" y="310" fontSize="10" fill="white" textAnchor="middle">
                      XXXX - XXXX - XXXX - XXXX
                    </text>

                    {/* Lock Icon */}
                    <circle cx="200" cy="150" r="50" fill="#2C5AA0" />
                    <rect x="180" y="140" width="40" height="35" rx="4" fill="#4A90E2" />
                    <circle cx="200" cy="130" r="15" fill="none" stroke="#4A90E2" strokeWidth="4" />

                    {/* Gear Icons */}
                    <circle cx="280" cy="120" r="20" fill="#667EEA" />
                    <circle cx="250" cy="90" r="15" fill="#667EEA" />

                    {/* Dollar Sign */}
                    <circle cx="120" cy="180" r="25" fill="#10B981" />
                    <text x="120" y="195" fontSize="32" fill="white" textAnchor="middle" fontWeight="bold">$</text>

                    {/* Checkmark */}
                    <circle cx="280" cy="220" r="30" fill="#10B981" opacity="0.2" />
                    <path d="M 265 220 L 275 230 L 295 210" stroke="#10B981" strokeWidth="4" fill="none" strokeLinecap="round" />

                    {/* Chat Bubble */}
                    <rect x="310" cy="180" width="50" height="35" rx="8" fill="#FCD34D" />
                    <text x="335" y="202" fontSize="16" textAnchor="middle">***</text>

                    {/* Person 1 */}
                    <circle cx="80" cy="240" r="20" fill="#F59E0B" />
                    <rect x="60" y="260" width="40" height="60" rx="20" fill="#F59E0B" />

                    {/* Person 2 */}
                    <circle cx="320" cy="280" r="20" fill="#3B82F6" />
                    <rect x="300" y="300" width="40" height="60" rx="20" fill="#3B82F6" />

                    {/* Plant */}
                    <ellipse cx="310" cy="350" rx="15" ry="8" fill="#10B981" />
                    <path d="M 310 350 Q 305 330 300 315" stroke="#10B981" strokeWidth="3" fill="none" />
                    <path d="M 310 350 Q 315 330 320 315" stroke="#10B981" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-12 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
                  <p className="text-muted-foreground">Sign up to get started</p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="h-12 pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 pl-10 pr-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link to="#" className="text-primary hover:text-primary/80 font-medium">Terms & Conditions</Link>
                      {" "}and{" "}
                      <Link to="#" className="text-primary hover:text-primary/80 font-medium">Privacy Policy</Link>
                    </span>
                  </div>

                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Create Account
                  </Button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                      Sign In
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

export default Register;
