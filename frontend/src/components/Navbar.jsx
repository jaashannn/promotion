import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ];

  const legalItems = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RefloHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-white hover:text-cyan-500 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Legal Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-cyan-500 transition-colors duration-200"
                onClick={() => setIsLegalMenuOpen(!isLegalMenuOpen)}
              >
                Legal
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isLegalMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden ${isLegalMenuOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseLeave={() => setIsLegalMenuOpen(false)}
              >
                {legalItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-500 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-xl rounded-lg mt-2 p-4 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-white hover:text-cyan-500 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Legal Links */}
            <div className="pt-2 border-t border-white/10 mt-2">
              <div className="text-gray-400 text-sm py-2">Legal</div>
              {legalItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 pl-4 text-white hover:text-cyan-500 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10 mt-4">
              <Link
                to="/get-started"
                className="w-full py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;