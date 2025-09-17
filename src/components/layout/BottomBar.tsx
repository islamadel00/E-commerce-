import Link from "next/link";
import Image from "next/image";
import qrCodeImage from "@/assets/images/qr-code.svg";

export default function BottomBar() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Exclusive & Subscribe */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Exclusive</h3>
            <h4 className="text-xl">Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-300 rounded-md py-2 px-4 w-full"
              />
              {/* Send icon */}
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Support</h3>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Account</h3>
            <Link href="/profile">My Account</Link>
            <Link href="/signin">Login / Register</Link>
            <Link href="/basket">Cart</Link>
            <Link href="/favorites">Wishlist</Link>
            <Link href="/items">Shop</Link>
          </div>

          {/* Column 4: Quick Link */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Quick Link</h3>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms Of Use</Link>
            <Link href="/help">FAQ</Link>
            <Link href="/reach">Contact</Link>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Download App</h3>
            <p className="text-xs text-gray-400">Save $3 with App new users only</p>
            <div className="flex gap-4 items-center">
              {/* QR Code */}
              <div className="w-20 h-20 bg-white p-2 rounded-lg">
                <Image
                  src={qrCodeImage}
                  alt="QR Code for App Download"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* App Store buttons */}
                <div className="w-32 h-10 bg-gray-700"></div>
                <div className="w-32 h-10 bg-gray-700"></div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-16">
          &copy; Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
}