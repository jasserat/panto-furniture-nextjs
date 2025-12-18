import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 pb-8">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8">
        {/* First Div: Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Panto</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
          </p>
        </div>

        {/* Second Div: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Email Marketing</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Campaigns</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Branding</a>
            </li>
          </ul>
        </div>

        {/* Third Div: Furniture */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Furniture</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Beds</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Chair</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">All</a>
            </li>
          </ul>
        </div>

        {/* Fourth Div: Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
          <div className="flex flex-col space-y-3">
            <a href="#" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition">
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition">
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition">
              <FaInstagram /> <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-8 border-gray-300 dark:border-gray-600 pt-6">
        <p className="text-gray-600 dark:text-gray-300">Copyright &copy; 2021</p>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Terms & Conditions</Link>
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
