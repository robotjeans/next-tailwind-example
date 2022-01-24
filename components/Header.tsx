import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-black py-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <Image
                src="/images/logo-32x32.png"
                alt="Home Logo"
                width={32}
                height={32}
              />
            </a>
          </Link>
          <div className="flex items-baseline space-x-4">
            <Link href="/about">
              <a className="dark:text-gray-300 text-gray-500  hover:text-teal-500  dark:hover:text-white px-3 py-2 rounded-md text-md tracking-tight">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="dark:text-gray-300 text-gray-500  hover:text-teal-500  dark:hover:text-white px-3 py-2 rounded-md text-md tracking-tight">
                Contact
              </a>
            </Link>
          </div>
          <div className="flex flex-row justify-center w-12">
            <button
              onClick={toggleTheme}
              className="dark:text-gray-300 text-gray-500 rounded-full outline-none focus:outline-none"
            >
              <span className="sr-only">Dark Mode</span>
              {!isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
