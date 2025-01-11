import { useState, useEffect, useRef } from "react";
import { SignInButton, SignOutButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/course" },
    { name: "Careers", link: "/careers" },
  ];
  const userItems = ["Dashboard", "Settings", "My Learning"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition && currentScrollPosition > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { user } = useClerk();
  console.log(user);

  return (
    <nav
      className={`w-full h-[10ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-xl transition-transform ease-in-out duration-300 z-50 
      ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-gray-800`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="/" className="flex items-center space-x-3 ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            EduNext
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
              id="user-menu-button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4394.jpg?w=740"
                alt="user photo"
              />
            </button>

            {isDropdownOpen && user && (
              <div
                className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm font-medium">
                    {user.fullName}
                  </span>
                  <span className="block text-sm text-gray-400">
                    {user.emailAddresses[0].emailAddress}
                  </span>
                </div>
                <ul className="py-2">
                  {userItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm hover:bg-gray-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-3 -mt-2 text-sm hover:bg-gray-600 block hover:rounded-lg">
                  <SignOutButton />
                </div>
              </div>
            )}
          </div>

          {!user && (
            <SignInButton className="text-white md:hover:text-blue-500 pl-3" />
          )}

          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
