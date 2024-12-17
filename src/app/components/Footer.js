import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
          <FaRobot className="text-5xl text-green-500" />

            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              At SmartBot, we innovate to create smart solutions for modern living, ensuring efficiency and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white  mb-4">Follow Us</h3>
            <div className="ml-[-0.35rem] flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated with the latest news and offers from SmartBot.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-gray-800 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© 2024 SmartBot. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
