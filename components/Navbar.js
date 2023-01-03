import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isShowed, setIsShowed] = useState(false);

  const router = useRouter();

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

  useEffect(() => {
    showNavLinks();
    console.log(router);
  }, [router]);

  return (
    <>
      <nav className="fixed z-[1000] w-full items-center p-2 px-3 text-black backdrop-blur-md dark:text-white sm:px-5 md:px-24">
        <div className="mx-auto flex items-center">
          <div className="mr-10 rounded-md bg-blue-600 py-2 px-3 text-xl font-semibold">
            <Link className="text-xl text-white" href={'/'}>
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
          <div className="ml-auto">
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
