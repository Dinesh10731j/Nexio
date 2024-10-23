import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 
import { useSelector } from 'react-redux';

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#F6F6F7] text-black"} py-10`}>
      <div className="container mx-auto px-4">
        {/* Footer Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className={`text-gray-400 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Welcome to our tech blog, where we share the latest insights on web development, AI, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about" className={`hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>About</a></li>
              <li><a href="/contact" className={`hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Contact</a></li>
              <li><a href="/privacy" className={`hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Privacy Policy</a></li>
              <li><a href="/terms" className={`hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <Facebook className="w-6 h-6"/>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <Twitter className="w-6 h-6"/>
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500">
                <Instagram className="w-6 h-6"/>
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-600">
                <Linkedin className="w-6 h-6"/>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Weekly Newsletter</h2>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Subscribe to our weekly newsletter for the latest tech updates and tutorials.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`w-full p-2 rounded-l-md ${theme === "dark" ? "text-gray-900" : "text-gray-900"}`}
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className={`text-gray-400 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} CodeStream Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
