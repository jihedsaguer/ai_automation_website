import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../config/navConfig';

const Navbar: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const visibleItems = navItems.slice(0, -2);
  const overflowItems = navItems.slice(-2);

  return (
    <>
      {/* Toggle Button - Always visible */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsNavVisible(!isNavVisible)}
        className="fixed top-4 right-4 z-[60] w-12 h-12 bg-gradient-to-br from-[#00EC96] to-[#00EC96]/80 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle navigation"
      >
        <motion.div
          animate={{ rotate: isNavVisible ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isNavVisible ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
      </motion.button>

      {/* Full Screen Navigation */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full flex flex-col"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/"
                      className="flex items-center space-x-2 text-2xl font-bold"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#00EC96] to-[#00EC96]/80 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-[#00EC96] to-[#00EC96]/80 bg-clip-text text-transparent">AI Nexus</span>
                    </Link>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center space-x-8">
                    {visibleItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                            location.pathname === item.path
                              ? 'text-[#00EC96]'
                              : 'text-foreground hover:text-[#00EC96]'
                          }`}
                          onClick={() => setIsNavVisible(false)}
                        >
                          {item.label}
                          {location.pathname === item.path && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-[#00EC96]/10 border border-[#00EC96]/20 rounded-lg -z-10"
                              initial={false}
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                          <div className="absolute inset-0 rounded-lg bg-[#00EC96]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-20" />
                        </Link>
                      </motion.div>
                    ))}

                    {/* Desktop Overflow Menu */}
                    <div className="relative" ref={menuRef}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-[#00EC96] hover:bg-[#00EC96]/5 transition-all duration-200"
                      >
                        <span>More</span>
                        <motion.div
                          animate={{ rotate: isMenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute right-0 top-full mt-2 w-56 bg-background/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#00EC96]/20 py-2 overflow-hidden"
                          >
                            {overflowItems.map((item, index) => (
                              <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={item.path}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsNavVisible(false);
                                  }}
                                  className={`flex items-center px-4 py-3 text-sm transition-all duration-150 ${
                                    location.pathname === item.path
                                      ? 'bg-[#00EC96]/10 text-[#00EC96] border-r-2 border-[#00EC96]'
                                      : 'text-foreground hover:bg-[#00EC96]/5 hover:text-[#00EC96]'
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="lg:hidden p-2 rounded-lg hover:bg-[#00EC96]/5 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <motion.div
                      animate={{ rotate: isMenuOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                  </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="lg:hidden overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        className="py-4 space-y-1 bg-gradient-to-b from-background/50 to-background rounded-xl mx-2 mb-4 border border-[#00EC96]/20"
                      >
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsNavVisible(false);
                              }}
                              className={`flex items-center px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                location.pathname === item.path
                                  ? 'bg-[#00EC96]/10 text-[#00EC96] border-l-4 border-[#00EC96]'
                                  : 'text-foreground hover:bg-[#00EC96]/5 hover:text-[#00EC96] hover:shadow-sm'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;