import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">ArtSphere</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio Builder</a>
            <a href="/collaborate" className="text-gray-600 hover:text-blue-600 transition-colors">Collaboration</a>
            <a href="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">Marketplace</a>
            <a href="/jobs" className="text-gray-600 hover:text-blue-600 transition-colors">Jobs</a>
            <a href="/spotlight" className="text-gray-600 hover:text-blue-600 transition-colors">Spotlight</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Button variant="secondary">Log In</Button>
            <Button>Sign Up</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/portfolio" className="block px-3 py-2 text-gray-600">Portfolio Builder</a>
              <a href="/collaborate" className="block px-3 py-2 text-gray-600">Collaboration</a>
              <a href="/marketplace" className="block px-3 py-2 text-gray-600">Marketplace</a>
              <a href="/jobs" className="block px-3 py-2 text-gray-600">Jobs</a>
              <a href="/spotlight" className="block px-3 py-2 text-gray-600">Spotlight</a>
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="secondary" className="w-full">Log In</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;