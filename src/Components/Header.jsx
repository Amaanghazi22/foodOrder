import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const [login, setLogin] = useState("Login");

  const cartCount = useSelector((store) => store.cart.items);

  function handleClick() {
    if (login === 'Login') setLogin('LogOut');
    else setLogin('Login');
  }

  return (
    <header className="bg-yellow-400 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and website name */}
        <Link to="/" className="flex items-center">
          <img
            src="https://i.pinimg.com/originals/c1/bd/fb/c1bdfb5ffda250e593a80d66e133a3f1.png"
            alt="Logo"
            className="h-14 w-14 rounded-full mr-4"
          />
          <span className="text-2xl font-semibold text-white">Foodie</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center flex-grow justify-center space-x-6">
          <NavLink to="/" className="text-white hover:text-gray-200 transition duration-300 text-lg font-bold uppercase">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200 transition duration-300 text-lg font-bold uppercase">About Us</NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-200 transition duration-300 text-lg font-bold uppercase">Contact Us</NavLink>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart">
          <div className="relative flex items-center">
            <div className="mr-4 relative">
              <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 -mt-2 -mr-2">
                <span className="text-xs">{cartCount.length}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h1.95l1.747 8.736a2 2 0 001.968 1.664H16a1 1 0 010 2h-9.64a2 2 0 00-1.97 1.664L3.316 17H2a1 1 0 01-1-1V4a1 1 0 011-1zm4.78 14a2 2 0 003.44 0h7.56a1 1 0 100-2h-7.56a2 2 0 00-3.44 0h-.117L4.396 6H16a1 1 0 100-2H4.395l-.702-3.514a1 1 0 00-1.97-.487L.116 5h-.1a1 1 0 00-.013 2h.052l1.76 8.8h.121z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Link>
        

        {/* Login */}
        <button className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300" onClick={handleClick}>{login}</button>
      </div>
    </header>
  );
}

export default Header;
