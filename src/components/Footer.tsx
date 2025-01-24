import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Aqua Industrial</h3>
            <p className="text-sm">
              Providing quality household taps and pumping solutions across Australia.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>1800 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@aquaindustrial.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>123 Industrial Ave, Sydney NSW 2000</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Business Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Aqua Industrial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;