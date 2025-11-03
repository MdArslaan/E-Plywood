import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Award, Package, Layers, Trees, Brush, Sparkles, CheckCircle2, ArrowRight, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Target } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  // Navigation functions
  const handleNavigation = (path) => {
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&h=600&fit=crop",
      title: "Premium Quality Plywood",
      subtitle: "Crafting Excellence Since 1994"
    },
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=600&fit=crop",
      title: "Elegant Laminates",
      subtitle: "Transform Your Spaces"
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop",
      title: "Authorized Dealer",
      subtitle: "Top Brands, Trusted Quality"
    },
    {
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=600&fit=crop",
      title: "30+ Years of Excellence",
      subtitle: "Your Trusted Partner in Wood Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Section 1: Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-amber-900/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <Shield className="w-20 h-20 text-amber-300 mx-auto mb-6 animate-pulse-slow" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-8 animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button 
                onClick={() => handleNavigation('/products')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section 2: About Us */}
      <section className="py-20 px-6 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-green-800 transform transition-all duration-500 hover:shadow-3xl">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-amber-600 mx-auto mb-4 animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
                Welcome to GRPS Plywood & Laminates
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="About GRPS"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Welcome to <strong className="text-green-900">GRPS Plywood & Laminates</strong>, your trusted partner for premium quality wood products and services. With over <strong className="text-amber-700">30 years of experience</strong> in the industry, we have established ourselves as one of Delhi NCR's most reliable dealers.
                </p>
                <p>
                  Our journey began in <strong>1994</strong>, and since then, we have been committed to delivering excellence in every product we offer. We pride ourselves on being an authorized dealer for India's most prestigious brands.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-900">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-700">1000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-900">100%</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Products */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-white to-amber-50 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our Premium Product Range
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive selection of wood and interior products for homes, offices, and large-scale projects
            </p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Timber", icon: <Trees className="w-12 h-12 text-green-700" />, color: "from-green-50 to-green-100" },
              { name: "Plywood", icon: <Layers className="w-12 h-12 text-amber-700" />, color: "from-amber-50 to-amber-100" },
              { name: "Flexi Plywood", icon: <Package className="w-12 h-12 text-green-700" />, color: "from-green-50 to-green-100" },
              { name: "Laminates", icon: <Brush className="w-12 h-12 text-amber-600" />, color: "from-amber-50 to-amber-100" },
              { name: "Veneers", icon: <Sparkles className="w-12 h-12 text-green-700" />, color: "from-green-50 to-green-100" },
              { name: "Decoratives", icon: <CheckCircle2 className="w-12 h-12 text-amber-700" />, color: "from-amber-50 to-amber-100" },
            ].map((product, index) => (
              <div
                key={index}
                onClick={() => handleNavigation('/products')}
                className={`bg-gradient-to-br ${product.color} rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
              >
                <div className="flex justify-center mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-green-900">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Premium Brands */}
      <section className="py-20 px-6 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 rounded-3xl shadow-2xl p-12 text-white">
            <div className="text-center mb-12">
              <Star className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4 text-amber-300">
                Authorized Dealer for Premium Brands
              </h2>
              <p className="text-green-100 text-lg max-w-3xl mx-auto">
                We partner with India's most trusted brands to bring you authenticated, premium quality products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { brand: "Clubwood Signature", desc: "Premium quality plywood for exceptional durability", type: "Plywood" },
                { brand: "Royal Club", desc: "Luxury range products for elegant interiors", type: "Plywood" },
                { brand: "Royale Touche", desc: "Elegant laminate solutions for modern spaces", type: "Laminates" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                >
                  <div className="text-amber-400 text-sm font-semibold mb-2">{item.type}</div>
                  <h3 className="text-2xl font-bold text-amber-300 mb-3">{item.brand}</h3>
                  <p className="text-green-100 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Industry Partners */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-green-50 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-green-700 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Trusted by Industry Giants
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Partnering with India's leading hospitality, infrastructure, and architectural firms
            </p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "ITC Hotels", desc: "Luxury hospitality interiors" },
              { name: "Sindhu Hotels", desc: "Sustainable design solutions" },
              { name: "GMR Infrastructure", desc: "Airport & infrastructure projects" },
              { name: "L&T", desc: "Industrial-grade constructions" },
              { name: "Top Architects", desc: "Design innovation partners" },
            ].map((client, index) => (
              <div
                key={index}
                onClick={() => handleNavigation('/past-projects')}
                className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-amber-700 mb-2">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="py-20 px-6 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-amber-600">
            <div className="text-center mb-16">
              <Target className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
                Why Choose GRPS?
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Our promise goes beyond products — it's about delivering reliability, craftsmanship, and excellence
              </p>
              <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <TrendingUp className="w-10 h-10" />, title: "30+ Years Experience", desc: "Three decades of industry expertise and trust" },
                { icon: <Shield className="w-10 h-10" />, title: "Authorized Dealer", desc: "Genuine products from premium brands only" },
                { icon: <Trees className="w-10 h-10" />, title: "Sustainable Practices", desc: "Eco-friendly and certified wood products" },
                { icon: <Target className="w-10 h-10" />, title: "Quality Assurance", desc: "100% quality checked at every stage" },
                { icon: <Users className="w-10 h-10" />, title: "Expert Guidance", desc: "Professional consultation for your projects" },
                { icon: <Award className="w-10 h-10" />, title: "After-Sales Support", desc: "Dedicated support when you need it" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 border border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-500"
                >
                  <div className="text-green-700 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 scroll-animate">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Get in touch with us today for expert consultation and premium quality products
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Call Us</h3>
              <p className="text-green-100">+91 98110 60872</p>
              <p className="text-green-100">+91 95601 72292</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Email Us</h3>
              <p className="text-green-100">GRPSOCT72@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Visit Us</h3>
              <p className="text-green-100">A-1/22, Marble Market</p>
              <p className="text-green-100">Kirti Nagar, Delhi - 110018</p>
            </div>
          </div>

          <button 
            onClick={() => handleNavigation('/contact')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Contact Us Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s backwards; }

        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        .scroll-animate.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}