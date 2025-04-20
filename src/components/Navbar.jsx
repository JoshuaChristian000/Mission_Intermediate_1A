import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img className="w-50" src="/assets/Logo.png" alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none gap-4 items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost">
            <span>Kategori</span>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/Avatar.png" alt="Avatar" />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><a>Profil Saya</a></li>
            <li><a>Kelas Saya</a></li>
            <li><a>Pesanan Saya</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

      {/* Hamburger (Mobile Only) */}
      <div className="md:hidden flex-none">
        <button
          className="btn btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 z-20 w-52 rounded-md bg-base-100 p-4 shadow-md md:hidden">
          <ul className="menu menu-vertical">
            <li><a>Kategori</a></li>
            <li><a>Profil Saya</a></li>
            <li><a>Kelas Saya</a></li>
            <li><a>Pesanan Saya</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
