import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'recipes', href: '/recipes' },
  { name: 'category', href: '/category' },
  { name: 'about us', href: '/about' },
];

const Nav = ({ isOpen }) => {
  return (
    <>
      {/* Mobile */}

      <nav
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-[190.25rem]'
        } fixed left-0 top-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[70%] border-r border-r-primary-400 bg-black pl-4 pt-[9rem]">
          {navigation.map((item, index) => (
            <li key={index} className="text-200 mb-4 capitalize text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'font-500 text-primary-400'
                    : 'font-500 transition-colors duration-300 hover:text-primary-400'
                }
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8">
          {navigation.map((item, index) => (
            <li key={index} className="text-200 mb-4 capitalize text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'font-500 text-primary-400'
                    : 'font-500 transition-colors duration-300 hover:text-primary-400'
                }
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
