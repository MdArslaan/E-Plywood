import React from "react";
import All from "../assests/all.png";
import { Package, Layers, Trees, Brush, Sparkles, CheckCircle2, Award, TrendingUp, Users, Target, Shield, Zap } from "lucide-react";

const WorkExperience = () => {
  return (
    <>
      {/* Work With Industry Giants Section */}
      <section
        id="work-experience"
        data-aos="fade-up"
        data-aos-delay="300"
        className="py-20 px-6 bg-gradient-to-br from-amber-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-green-100">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              We Work With Industry Giants
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Over the years, <span className="font-semibold text-green-800">GRPS
Plywood & Laminates</span> has partnered with
              some of India's most trusted names in the hospitality, infrastructure,
              and architectural sectors — delivering quality that meets world-class standards.
              Our reliability and craftsmanship have made us a preferred choice across industries.
            </p>
          </div>

          {/* Work Experience Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: "ITC Hotels",
                desc: "Supplying premium-grade plywood and laminates for luxury interiors that define durability and class.",
              },
              {
                name: "Sindhu Hotels",
                desc: "Delivering sustainable materials that merge modern design with long-lasting performance.",
              },
              {
                name: "GMR Infrastructure",
                desc: "Providing high-performance plywood for large-scale infrastructure and airport projects nationwide.",
              },
              {
                name: "L&T (Carousel Turbo)",
                desc: "Supporting industrial-grade constructions with moisture-resistant, reliable plywood solutions.",
              },
              {
                name: "Top Architectural Firms",
                desc: "Collaborating with leading architects and designers to turn creative visions into reality.",
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
          <div className="mt-16 text-center border-t border-green-300/40 pt-6">
            <p className="text-green-900 font-medium italic text-lg">
              "Our partnerships with leading brands showcase GRPS
Plywood & Laminates's dedication
              to excellence, sustainability, and lasting trust."
            </p>
          </div>
        </div>
      </section>

      {/* Our Product Range Section */}
      <section
        id="products"
        data-aos="fade-up"
        data-aos-delay="200"
        className="py-20 px-6 bg-gradient-to-tr from-green-50 via-white to-amber-50"
      >
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-200 p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-green-800">GRPS
Plywood & Laminates</span>, we offer a complete range of
              wood and interior products — perfect for homes, offices, and large-scale projects.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Timber", icon: <Trees className="w-10 h-10 text-green-700" /> },
              { name: "Plywood", icon: <Layers className="w-10 h-10 text-amber-700" /> },
              { name: "Flexi Plywood", icon: <Package className="w-10 h-10 text-green-700" /> },
              { name: "Laminates", icon: <Brush className="w-10 h-10 text-amber-600" /> },
              { name: "Veneers", icon: <Sparkles className="w-10 h-10 text-green-700" /> },
              { name: "Decoratives", icon: <CheckCircle2 className="w-10 h-10 text-amber-700" /> },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-green-700 rounded-2xl shadow-md hover:shadow-xl 
                text-center py-8 px-4 transition-all duration-500 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-green-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Our Achievements & Milestones */}
      <section
        id="achievements"
        data-aos="fade-up"
        className="py-20 px-6 bg-gradient-to-br from-white via-amber-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-12 h-12 text-amber-600" />
              <h2 className="text-4xl font-bold text-green-900">
                Our Achievements & Milestones
              </h2>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Three decades of excellence, innovation, and trust-building have positioned us as industry leaders.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: "30+", label: "Years of Excellence", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
              { number: "1000+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
              { number: "100%", label: "Quality Assurance", icon: <Shield className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="bg-white rounded-2xl shadow-lg border-t-4 border-amber-600 p-8 text-center 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-center text-green-700 mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-bold text-green-900 mb-2">{stat.number}</h3>
                <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline Milestones */}
          <div className="bg-gradient-to-r from-green-900 via-green-800 to-amber-900/90 rounded-3xl shadow-2xl p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-10 text-amber-300">Our Journey</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: "1994",
                  title: "The Beginning",
                  desc: "Started with a vision to provide premium quality wood products to Delhi NCR.",
                },
                {
                  year: "2005",
                  title: "Expansion",
                  desc: "Expanded our dealer network across India, partnering with top brands.",
                },
                {
                  year: "2024",
                  title: "Industry Leader",
                  desc: "Recognized as one of the most trusted names in plywood and laminates.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
                  hover:bg-white/20 transition-all duration-500"
                >
                  <div className="text-4xl font-bold text-amber-400 mb-3">{milestone.year}</div>
                  <h4 className="text-xl font-bold text-amber-200 mb-2">{milestone.title}</h4>
                  <p className="text-green-100 leading-relaxed">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Our Process & Commitment */}
      <section
        id="process"
        data-aos="fade-up"
        className="py-20 px-6 bg-gradient-to-br from-green-50 via-white to-amber-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-12 h-12 text-green-700" />
              <h2 className="text-4xl font-bold text-green-900">
                Our Process & Commitment
              </h2>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              From sourcing to delivery, we ensure excellence at every step with transparency and dedication.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Quality Sourcing",
                desc: "We partner with certified suppliers to ensure every product meets international standards.",
                color: "border-green-600 text-green-600",
              },
              {
                step: "02",
                title: "Expert Consultation",
                desc: "Our experienced team guides you in selecting the perfect materials for your project needs.",
                color: "border-amber-600 text-amber-600",
              },
              {
                step: "03",
                title: "Timely Delivery",
                desc: "Efficient logistics network ensures your orders reach you on time, every time.",
                color: "border-green-700 text-green-700",
              },
              {
                step: "04",
                title: "After-Sales Support",
                desc: "We stand by our products with dedicated support and assistance whenever you need it.",
                color: "border-amber-700 text-amber-700",
              },
            ].map((process, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white rounded-2xl shadow-lg border-l-4 p-8 hover:shadow-2xl 
                hover:-translate-y-2 transition-all duration-500"
                style={{ borderColor: process.color.split(' ')[0].replace('border-', '') }}
              >
                <div className={`text-5xl font-bold mb-4 ${process.color.split(' ')[1]}`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{process.title}</h3>
                <p className="text-gray-700 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>

          {/* Commitment Cards */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-200 p-10">
            <h3 className="text-3xl font-bold text-green-900 text-center mb-10">
              Our Commitments to You
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-green-700" />,
                  title: "Authenticity Guaranteed",
                  desc: "100% genuine products from authorized brands only",
                },
                {
                  icon: <Trees className="w-10 h-10 text-green-700" />,
                  title: "Sustainable Practices",
                  desc: "Eco-friendly sourcing and responsible forestry",
                },
                {
                  icon: <Award className="w-10 h-10 text-amber-600" />,
                  title: "Premium Quality",
                  desc: "Rigorous quality checks at every stage",
                },
                {
                  icon: <Users className="w-10 h-10 text-amber-600" />,
                  title: "Customer First",
                  desc: "Your satisfaction is our top priority",
                },
                {
                  icon: <Zap className="w-10 h-10 text-green-700" />,
                  title: "Quick Response",
                  desc: "Fast delivery and responsive support",
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-amber-600" />,
                  title: "Competitive Pricing",
                  desc: "Best value for premium quality products",
                },
              ].map((commitment, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 border border-green-200
                  hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{commitment.icon}</div>
                  <h4 className="text-lg font-bold text-green-900 text-center mb-2">
                    {commitment.title}
                  </h4>
                  <p className="text-gray-700 text-sm text-center leading-relaxed">
                    {commitment.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Header */}
<div className="w-full flex flex-col items-center mb-16 px-4 text-center py-12 bg-gradient-to-br from-amber-50 to-green-50">

  {/* Image Section */}
  <div className="flex justify-center mb-12 w-full">
    <div className="relative w-full max-w-4xl">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-amber-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

      {/* Main Image Container */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-green-200">
        <img
          src={All}
          alt="All Products"
          className="w-full h-auto object-contain rounded-2xl transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Title */}
  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
    Our Products
  </h1>

  {/* Subtitle */}
  <p className="text-base md:text-lg text-green-700 mb-4 max-w-2xl mx-auto">
    Discover our premium collection of high-quality products
  </p>

  {/* Underline Divider */}
  <div className="w-28 md:w-32 h-1.5 bg-gradient-to-r from-green-800 via-amber-600 to-amber-800 rounded-full"></div>
</div>

      {/* Why Choose Us Section */}
      <section
        id="why-choose"
        data-aos="fade-up"
        className="py-20 px-6 bg-gradient-to-br from-green-900 via-green-800 to-amber-900/90 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-300">Why Choose GRPS
Plywood & Laminates?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-amber-100">
            Our promise goes beyond products — it's about delivering reliability, craftsmanship,
            and a seamless experience from start to finish.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Decades of Expertise",
              "Authorized Brand Dealerships",
              "Sustainable & Certified Wood",
              "Nationwide Supply Network",
              "Premium Quality Assurance",
              "Exceptional After-Sales Support",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <p className="text-xl font-semibold text-amber-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;