import Image from "next/image";
import sideImage from "@/assets/images/Side Image.png";
import teamImage1 from "@/assets/images/1.png";
import teamImage2 from "@/assets/images/2.png";
import teamImage3 from "@/assets/images/3.png";

export default function InfoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="hover:underline cursor-pointer">Home</span> /{" "}
        <span className="text-black font-medium">About</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Launched in 2015, <span className="font-semibold">RouteCommerce</span> 
              is South Asia&apos;s premier online shopping marketplace 
              with an active presence in Bangladesh. Supported by wide range of 
              tailored marketing, data and service solutions, RouteCommerce has 
              10,500 sellers and 300 brands and serves 3 million customers across 
              the region.
            </p>
            <p>
              RouteCommerce has more than 1 Million products to offer, growing at 
              a very fast pace. RouteCommerce offers a diverse assortment in 
              categories ranging from consumer electronics, fashion, home goods, 
              and much more.
            </p>
          </div>
        </div>

        {/* Shopping Image */}
        <div className="relative">
          <Image
            src={sideImage}
            alt="Happy Customers Shopping"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="bg-white border rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">10.5k</h3>
          <p className="text-gray-500 text-sm">Sellers active on our site</p>
        </div>

        <div className="bg-red-500 text-white rounded-2xl shadow p-8 text-center hover:opacity-90 transition">
          <h3 className="text-3xl font-bold mb-2">33k</h3>
          <p className="text-sm">Monthly Product Sale</p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">45.5k</h3>
          <p className="text-gray-500 text-sm">Customers active on our site</p>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">25k</h3>
          <p className="text-gray-500 text-sm">Annual gross sale</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-14">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Tom Cruise", role: "Founder & Chairman", image: teamImage1 },
            { name: "Emma Watson", role: "Managing Director", image: teamImage2 },
            { name: "Will Smith", role: "Product Designer", image: teamImage3 },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl shadow-sm p-8 hover:shadow-lg transition"
            >
              <div className="  mx-auto mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-400">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
