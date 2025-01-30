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
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16" >
          <div className="flex items-center "  >
            <img src="./Logo.png" className="h-1/2 w-full object-contain cursor-pointer " alt="SDS" onClick={() => navigate("/")}/>
            {/*<span className="text-sm ">SDS Fixtures & Fittings </span>*/}
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="text-gray-700 hover:text-primary transition-colors"
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
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
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
      )}
    </nav>
  );
};

export default Navbar;