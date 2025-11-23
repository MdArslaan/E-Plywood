import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Your working Google Apps Script URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby49foIHF0LtnfcOOY8YFWzC33K4FUcsxSjFnN32kQS9LZFVNIItB1NNaRvaRjiFHRiZg/exec";

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "");
      if (numbersOnly.length <= 10) {
        setFormData({ ...formData, [name]: numbersOnly });
      }
      if (value !== numbersOnly && value.length > 0) {
        showToast("📞 Please enter numbers only in the phone field!", "error");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      showToast("⚠️ Please fill all details carefully!", "error");
      return false;
    }
    if (phone.length !== 10) {
      showToast("📞 Please enter exactly 10 digits in the phone field!", "error");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("📧 Please enter a valid email address!", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      showToast("✅ Thank you! Our team will contact you shortly.", "success");
      console.log("Form Submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      showToast("❌ Something went wrong. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 py-16 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-500 ${
            toast.type === "success"
              ? "bg-gradient-to-r from-green-700 to-green-600 text-white"
              : "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
          } animate-slide-in`}
        >
          <p className="font-medium">{toast.message}</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-green-900 mb-4 animate-slide-down">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? We'd love to hear from you!  
            Fill out the form and our team will reach out to you soon.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-4 border-green-700 flex flex-col justify-between animate-slide-right">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-8 h-8 text-green-700" />
                <h2 className="text-3xl font-bold text-green-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                {[
                  { name: "name", label: "Full Name", type: "text", icon: "👤" },
                  { name: "email", label: "Email Address", type: "email", icon: "📧" },
                  { name: "phone", label: "Phone Number", type: "tel", icon: "📱", prefix: "+91" },
                  { name: "subject", label: "Subject", type: "text", icon: "📝" },
                ].map((field, index) => (
                  <div key={index} className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.icon} {field.label}
                    </label>
                    {field.prefix ? (
                      <div className="flex gap-2">
                        <div className="flex items-center px-4 py-3 bg-green-100 border-2 border-gray-200 rounded-xl text-green-800 font-semibold">
                          {field.prefix}
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          maxLength={10}
                          className="flex-1 px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                                   focus:ring-2 focus:ring-green-600 focus:border-green-600 
                                   transition-all duration-300 group-hover:border-green-300
                                   placeholder:text-gray-400"
                          placeholder="Enter 10 digit number"
                        />
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                                 focus:ring-2 focus:ring-green-600 focus:border-green-600 
                                 transition-all duration-300 group-hover:border-green-300
                                 placeholder:text-gray-400"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    💬 Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                               focus:ring-2 focus:ring-green-600 focus:border-green-600
                               transition-all duration-300 group-hover:border-green-300
                               placeholder:text-gray-400 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-800 to-amber-600 
                             text-white py-4 rounded-xl font-bold text-lg 
                             hover:from-green-900 hover:to-amber-700 
                             transition-all duration-500 shadow-lg hover:shadow-2xl 
                             transform hover:-translate-y-1 active:translate-y-0
                             disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Why Choose Us */}
          <div className="flex flex-col justify-between space-y-6 animate-slide-left">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-amber-900/90 
                           text-white rounded-3xl shadow-2xl p-10 flex-1 
                           transform transition-all duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-amber-300 mb-8 flex items-center gap-3">
                <Phone className="w-8 h-8" />
                Contact Info
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">Address</p>
                    <p className="text-green-100">
                      A-1/22, Marble Market, Kirti Nagar,<br />
                      New Delhi – 110018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">Email</p>
                    <p className="text-green-100">grps0872@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">Phone</p>
                    <p className="text-green-100">+91 98110 60872</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 flex-1
                           transform transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <span className="text-green-700 text-3xl">🌟</span>
                Why Choose Us
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Trusted Since 1994",
                    desc: "Over three decades of delivering quality and building long-lasting relationships.",
                  },
                  {
                    title: "Authorized Dealers",
                    desc: "We work with India's most prestigious brands, ensuring 100% authenticity and excellence.",
                  },
                  {
                    title: "Expert Guidance",
                    desc: "Our experienced team helps you choose the perfect products for your projects.",
                  },
                ].map((point, index) => (
                  <li
                    key={index}
                    className="p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-all duration-300"
                  >
                    <strong className="block text-green-800 text-lg mb-1">
                      {point.title}
                    </strong>
                    <p className="text-gray-700 text-sm leading-relaxed">{point.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        @keyframes slide-in { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-down { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-right { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-left { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-right { animation: slide-right 0.8s ease-out; }
        .animate-slide-left { animation: slide-left 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default Contact;
