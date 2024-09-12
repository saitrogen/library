"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger menu
import Link from "next/link";

const navItems = [
  { name: "Resources", href: "/resources" },
  { name: "Career", href: "/career" },
  { name: "Research", href: "/research" },
  { name: "Quick Links", href: "quickLinks" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Filter nav items based on the search query
  const filteredNavItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-primary text-foreground border-b border-neutral-500 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Name */}
        <div className=" font-bold">
          <Link href="/" className="text-foreground text-4xl sm:text-2xl lg:text-4xl">
            Amal Library
          </Link>
        </div>

        <div className="flex flex-row justify-between gap-2 items-center">
          {/* Search Bar for larger screens */}
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-secondary text-foreground  p-2 rounded-md placeholder:text-primary placeholder:text-xs outline-none md:w-32 lg:w-54 h-6 "
            />
            {searchQuery && (
              <div className="absolute bg-background shadow-lg w-full mt-2 rounded-md max-h-48 overflow-y-auto z-10">
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-muted-light text-foreground"
                    onClick={() => setSearchQuery("")}
                  >
                    {item.name}
                  </Link>
                ))}
                {filteredNavItems.length === 0 && (
                  <p className="px-4 py-2 text-muted">No results found</p>
                )}
              </div>
            )}
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex items-center justify-between space-x-5 md:space-x-3 text-sm  lg:text-base  font-bold">
            {navItems.map((item) => (
              <Link 
              href={item.href} 
              key={item.name} 
              className="hover:text-neutral-300">
                <span className="">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <nav
        className={`md:hidden bg-primary text-foreground overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className=" p-4 space-y-4">
          {/* Search Bar inside Mobile Navigation */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-background text-foreground border border-border p-2 rounded-md placeholder:text-muted outline-none w-full"
            />
            {searchQuery && (
              <div className="absolute bg-background shadow-lg w-full mt-2 rounded-md max-h-48 overflow-y-auto z-10">
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-muted-light text-foreground"
                    onClick={() => setSearchQuery("")}
                  >
                    {item.name}
                  </Link>
                ))}
                {filteredNavItems.length === 0 && (
                  <p className="px-4 py-2 text-muted">No results found</p>
                )}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link href={item.href} key={item.name} className="block p-1 pr-1 hover:text-emerald-300  hover:bg-green-50 hover:bg-opacity-25 hover:pr-3 hover:rounded-md">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
