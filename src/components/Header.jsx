import { Menu, X } from 'lucide-react';
import Nav from './Nav';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-black shadow-sm' : ''
      } fixed top-0 z-50 w-full transition-all duration-300 ease-in-out`}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          className={`${
            isScrolled ? 'text-primary-400' : 'text-white'
          } text-500 font-500`}
          href="/"
        >
          Zest
        </a>

        <Nav isOpen={isOpen} />

        <button onClick={toggleMenu} className="z-50 text-white md:hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
