import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
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
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {" / "}
            <Link to="#" className="hover:text-primary">pages</Link>
            {" / "}
            <span>login</span>
          </div>

          <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
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
              <div className="p-12">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
                  <p className="text-muted-foreground">LOGIN TO CONTINUE</p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Example@gmail.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                      Forget Password ?
                    </Link>
                  </div>

                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-semibold">
                    LOGIN
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    NEW USER?{" "}
                    <Link to="/register" className="text-primary font-semibold hover:underline">
                      SIGN UP
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
