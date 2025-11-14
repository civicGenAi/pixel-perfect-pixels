import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Tech Street, Silicon Valley", "San Francisco, CA 94016", "United States"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+255 697 612 445", "+1 (555) 123-4567", "Mon-Fri: 9AM - 6PM"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@neverland.com", "info@neverland.com", "sales@neverland.com"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-6">
          <div className="container mx-auto px-4">
            <div className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              {" / "}
              <span className="text-foreground font-medium">Contact Us</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-lg mb-6">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Have a question or need assistance? We're here to help! Reach out to us through
                any of the channels below, and our team will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group text-center"
                >
                  <div className={`w-16 h-16 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
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
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="h-12 pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</Label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Neverland Location"
                  ></iframe>
                </div>

                {/* FAQ Quick Links */}
                <div className="bg-primary text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Quick Help</h3>
                  <p className="text-white/90 mb-6">
                    Looking for quick answers? Check out our frequently asked questions
                  </p>
                  <div className="space-y-3">
                    <Link to="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                      <div className="font-semibold">Shipping & Delivery</div>
                      <div className="text-sm text-white/80">Learn about our shipping policies</div>
                    </Link>
                    <Link to="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                      <div className="font-semibold">Returns & Refunds</div>
                      <div className="text-sm text-white/80">30-day return policy details</div>
                    </Link>
                    <Link to="#" className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                      <div className="font-semibold">Payment Methods</div>
                      <div className="text-sm text-white/80">Accepted payment options</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="text-gray-600 text-lg">
                  Our customer support team is available to help you right now
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Support</h3>
                  <p className="text-gray-600 mb-4">Speak with our team directly</p>
                  <Button variant="outline" className="border-2">
                    +255 697 612 445
                  </Button>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                  <Button variant="outline" className="border-2">
                    Start Chat
                  </Button>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us an email anytime</p>
                  <Button variant="outline" className="border-2">
                    support@neverland.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
