"use client";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
 

const MenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };
  return (
    <>

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-foreground">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    

      {/* Mobile Navigation (Dropdown) */ }
  {
    isMenuOpen && (
      <nav className="md:hidden bg-primary text-foreground p-4 space-y-4">
        <Link href="#" className="block hover:text-accent">
          Home
        </Link>
        <Link href="#" className="block hover:text-accent">
          Catalog
        </Link>
        <Link href="#" className="block hover:text-accent">
          Services
        </Link>
        <Link href="#" className="block hover:text-accent">
          Events
        </Link>
        <Link href="#" className="block hover:text-accent">
          About Us
        </Link>
        <Link href="#" className="block hover:text-accent">
          Contact
        </Link>
      </nav>
    )
  }
    </>
  )
}

export default MenuToggle