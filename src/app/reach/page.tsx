"use client";

import { useState } from "react";

export default function ReachPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="wrapper mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-8">
        <span>Home</span> / <span className="text-black">Contact</span>
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        {/* Left Column - Contact Information */}
        <div className="bg-white border rounded-xl shadow-sm p-8 space-y-8">
          {/* Call To Us */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">📞</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Call To Us</h3>
              <p className="text-gray-600 mb-2">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-800 font-medium">Phone: +8801611112222</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Write To Us */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">✉️</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Write To US</h3>
              <p className="text-gray-600 mb-2">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <div className="space-y-1">
                <p className="text-gray-800 font-medium">
                  Emails: customer@exclusive.com
                </p>
                <p className="text-gray-800 font-medium">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2 bg-white border rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name, Email, Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
}
