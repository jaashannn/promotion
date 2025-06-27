import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/rlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Freelancer', path: '/freelancer' },
    { name: 'Business', path: '/business' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Get Started', path: '/get-started' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex-shrink-0"
>
  <Link to="/">
    <img
      src={logo} // replace with the correct filename and extension
      alt="Reflo Hub Logo"
    className="h-20 w-20 object-contain"  // adjust size as needed
    />
  </Link>
</motion.div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2, color: '#00d4ff' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium text-dark-text hover:text-neon-blue transition-colors duration-300 ${
                    item.name === 'Get Started'
                      ? 'bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg rounded-lg px-4 py-2'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-dark-text hover:text-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block px-3 py-2 text-base font-medium text-dark-text hover:text-neon-blue hover:bg-white/5 rounded-lg transition-colors duration-300 ${
                    item.name === 'Get Started'
                      ? 'bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;