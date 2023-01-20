import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isShowed, setIsShowed] = useState(false);
  const [theme, setTheme] = useState('light');

  const router = useRouter();

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const showNavLinks = () => {
    let navLink = document.querySelector('#nav-links');
    if (isShowed == true) {
      navLink.classList.remove('hidden');
      navLink.classList.add('block', 'md:hidden');
      setIsShowed(false);
    } else {
      navLink.classList.remove('block');
      navLink.classList.add('hidden');
      setIsShowed(true);
    }
  };

  const setDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const themeMode = localStorage.getItem('theme');
    if (!themeMode) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(themeMode);
    }
    showNavLinks();
    setDarkMode();
  }, [router]);

  return (
    <>
      <nav className="fixed z-[1000] w-full items-center p-2 px-3 text-black backdrop-blur-md  sm:px-5 md:px-24 border-b border-solid border-slate-200">
        <div className="mx-auto flex items-center">
          <div className="mr-10 rounded-md bg-blue-600 py-2 px-3 text-xl font-semibold">
            <Link className="text-xl dark:text-black text-white" href={'/'}>
              LuthfiK.
            </Link>
          </div>
          <ul className="hidden md:flex">
            <li className="nav-link">
              <Link href={'/now'}>Now</Link>
            </li>
            <li className="nav-link">
              <Link href={'/portfolio'}>Portfolio</Link>
            </li>
            <li className="nav-link">
              <Link href={'/posts'}>Posts</Link>
            </li>
          </ul>
          <div className="ml-auto flex">
            <button onClick={changeTheme} className="btn mr-2 rounded-md bg-blue-600 text-white">
              {theme == 'dark' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
            </button>
            <button className="btn inline-block btn-primary md:hidden" onClick={showNavLinks}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
        <div id="nav-links" className="fixed top-16 right-5 z-[999] hidden rounded-md bg-white p-3 text-black shadow-md transition-all">
          <ul className="font-poppins pr-5">
            <li className="nav-link">
              <Link onClick={showNavLinks} href={'/now'}>
                Now
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={showNavLinks} href={'/portfolio'}>
                Portfolio
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={showNavLinks} href={'/posts'}>
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
