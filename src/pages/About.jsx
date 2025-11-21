import React, { useEffect, useRef } from 'react';
import { Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutUs() {
  const observerRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="shadow-2xl bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 backdrop-blur-md text-white py-8 relative z-10 animate-slide-down">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">GRPS
Plywood & Laminates</h1>
              <p className="text-amber-200 text-lg pl-12">Innovating Wood Solutions Since 1994</p>
            </div>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        {/* About Section */}
        <section id="about" className="scroll-animate mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-green-800 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <h2 className="text-4xl font-bold text-green-900 mb-6 flex items-center">
              <Award className="mr-3 text-amber-600 animate-bounce-slow" />
              About Us
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to <strong className="text-green-900">GRPS Plywood & Laminates</strong> — your trusted destination for premium wood, laminate, and decorative surface solutions. Since our founding in <strong>1994</strong>, we’ve built a strong reputation for delivering quality, reliability, and innovation in every project we undertake.
              </p>

              <p>
                From residential interiors to large-scale commercial spaces, our products are crafted to offer <strong>durability, design, and sustainability</strong> that exceed expectations. We supply <strong>plywood, laminates, veneers, MDF, block boards</strong>, and modern architectural panels across India.
              </p>

              <p>
                As an <strong>authorized dealer of top brands</strong>, we ensure you get only the best quality materials — rigorously tested and responsibly sourced. Our philosophy is simple: deliver premium products at competitive prices while maintaining an unwavering commitment to customer satisfaction.
              </p>

              <p>
                With a team of industry experts, we assist architects, interior designers, and builders in selecting the right materials to bring their creative visions to life. At E-Plywood, every sheet we sell reflects our dedication to <strong>craftsmanship, sustainability, and trust</strong>.
              </p>

              <p>
                Looking ahead, we aim to expand across India and introduce modern, eco-friendly wood innovations that combine strength, elegance, and environmental consciousness.
              </p>
            </div>
          </div>
        </section>


        {/* Leadership Section */} <section className="mb-16 scroll-animate"> <div className="bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 rounded-2xl shadow-xl p-8 text-white transform transition-all duration-500 hover:shadow-2xl"> <h2 className="text-3xl font-bold mb-8 flex items-center"> <Users className="mr-3 text-amber-300" /> Our Leadership </h2> <div className="grid md:grid-cols-2 gap-8"> {/* Piyush Singhal */} <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"> <h3 className="text-2xl font-bold text-amber-300 mb-2">Piyush Singhal</h3> <p className="text-amber-100 text-sm mb-4">Proprietor | Managing Director & CEO</p> <div className="space-y-2 text-green-100"> <p className="flex items-center"> <Phone className="w-4 h-4 mr-2" /> +91 9811060872 </p> <p className="text-sm italic">Leading the company with vision and expertise</p> </div> </div> {/* Sandeep Singhal */} <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"> <h3 className="text-2xl font-bold text-amber-300 mb-2">Sandeep Singhal</h3> <p className="text-amber-100 text-sm mb-4">Managing Director & CEO</p> <div className="space-y-2 text-green-100"> <p className="flex items-center"> <Phone className="w-4 h-4 mr-2" /> +91 9560172292 </p> <p className="text-sm italic">Driving operational excellence and growth</p> </div> </div> {/* Rekha Singhal */} <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:col-span-2 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"> <h3 className="text-2xl font-bold text-amber-300 mb-2">Rekha Singhal</h3> <p className="text-amber-100 text-sm mb-4">Partner | Co-Founder</p> <p className="text-green-100 text-sm italic">Integral to the foundation and success of GRPS</p> </div> </div> </div> </section>

        {/* Work With Industry Giants Section */}
        <section data-aos="fade-up" data-aos-delay="300" className="scroll-animate mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl shadow-xl p-12 border border-green-200">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-green-900 mb-4 tracking-wide">
                We Work With Industry Giants
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                Over the years, we’ve partnered with some of India’s most renowned names in hospitality, infrastructure, and architecture — delivering excellence that meets world-class standards.
              </p>
            </div>

            {/* Work Experience Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  name: "ITC Hotels",
                  desc: "Supplying premium-grade plywood and laminates for luxury interiors that redefine elegance and durability.",
                },
                {
                  name: "Sindhu Hotels",
                  desc: "Delivering sustainable materials for hospitality environments balancing beauty and strength.",
                },
                {
                  name: "GMR Infrastructure",
                  desc: "Providing durable wood solutions for airports, terminals, and large-scale infrastructure.",
                },
                {
                  name: "L&T (Carousel Turbo)",
                  desc: "Supporting industrial-grade constructions with moisture-resistant plywood and laminates.",
                },
                {
                  name: "Top Architectural Firms",
                  desc: "Collaborating with India’s leading architects to bring design innovation and quality to every space.",
                },
              ].map((client, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-amber-700 mb-3">{client.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{client.desc}</p>
                </div>
              ))}
            </div>

            {/* Closing Line */}
            <div className="mt-12 text-center border-t border-green-300/40 pt-6">
              <p className="text-green-900 font-medium italic text-lg">
                “Our collaborations with leading brands reflect our dedication to unmatched quality, craftsmanship, and trust.”
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="scroll-animate">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-800">
            <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center">
              <MapPin className="mr-3 text-amber-600" />
              Visit Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Our Address</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>A-1/22, Industrial Area</strong><br />
                  Kirti Nagar, New Delhi - 110018
                </p>
                <p className="text-sm text-gray-600 italic mt-4">
                  Conveniently located in the heart of Delhi NCR, serving customers across India with excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-3 text-green-700" />
                    <a href="mailto:info@e-plywood.com" className="hover:text-green-900 transition">
                      info@e-plywood.com
                    </a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-green-700" />
                    <a href="tel:+919811060872" className="hover:text-green-900 transition">
                      +91 98110 60872
                    </a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-green-700" />
                    <a href="tel:+919560172292" className="hover:text-green-900 transition">
                      +91 95601 72292
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 rounded-xl shadow-xl p-8 text-white">
          <p className="text-xl font-semibold mb-2">
            Experience the innovation that defines E-Plywood & Laminates
          </p>
          <p className="text-amber-200">
            Crafting excellence in wood solutions since 1994
          </p>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        @keyframes blob { 
          0%, 100% { transform: translate(0, 0) scale(1); } 
          33% { transform: translate(30px, -50px) scale(1.1); } 
          66% { transform: translate(-20px, 20px) scale(0.9); } 
        }
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
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
