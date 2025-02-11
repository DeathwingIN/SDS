import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", isPage: true },
    { name: "About", href: "/#about", isPage: false },
    { name: "Services", href: "/services", isPage: true },
    { name: "Contact", href: "/#contact", isPage: false },
  ];

  const handleNavigation = (href: string, isPage: boolean) => {
    if (isPage) {
      navigate(href);
    } else {

      navigate(href);


      if (location.pathname === '/') {
        const hash = href.split('#')[1];
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
            <span>
              <h3 className="text-xl font-semibold text-white">SDS Fixtures & Fittings</h3>
              <h5 className="text-white font-thin">ABN 88281473799</h5>
            </span>
              <p className="text-sm">
                An extensive range of industry-leading furnishings tailored for commercial projects, ensuring quality, durability, and functionality.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                          onClick={() => handleNavigation(item.href, item.isPage)}
                          className="hover:text-primary transition-colors"
                      >
                        {item.name}
                      </button>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} />
                  <span>0433 855 820</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} />
                  <span>info@sdsffe.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} />
                  <span>3 Valrena Way, Pakenham, VIC 3810</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Business Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
                <li>Saturday: 8:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} SDS Fixtures & Fittings. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;