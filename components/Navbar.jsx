import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('white');
        setTextColor('black');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed top-0 left-0 z-10 w-full duration-300 east-in">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="text-4xl font-bold">Capture Father</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="z-10 block sm:hidden">
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
              : "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
