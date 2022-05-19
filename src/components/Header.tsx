import Link from 'next/link';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import ToggleTheme from '@/components/ToggleTheme';

const Header: FunctionComponent = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-black py-4">
      <div className="max-w-7xl mx-auto py-5 px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <Image src="/images/logo-32x32.png" alt="Home Logo" width={32} height={32} />
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
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
