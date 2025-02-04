import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 10);
      } else {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
      <nav className="fixed w-full bg-white  backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center w-fit">
              <img
                  src="./Logo.png"
                  className="md:h-[40px] h-1/2 w-auto object-contain cursor-pointer"
                  alt="SDS"
                  onClick={() => navigate("/")}
              />
              <p className="pl-5 text-[20px] md:text-[30px] text-black font-medium">Fixtures & Fittings</p>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href, item.isPage)}
                      className="relative text-gray-700 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </button>
              ))}
              <Button onClick={() => navigate('/quote-request')}>Get Quote</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute w-full bg-white backdrop-blur-sm border-b transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.isPage)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </button>
            ))}
            <div className="px-3 py-2">
              <Button
                  className="w-full"
                  onClick={() => {
                    navigate('/quote-request');
                    setIsOpen(false);
                  }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;