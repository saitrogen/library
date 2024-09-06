import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Icons from Lucide React

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-foreground py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Catalog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Amal Library</p>
          <p className="mb-2">123 Library St., Nilambur, Kerala</p>
          <p className="mb-2">Email: info@amallibrary.com</p>
          <p className="mb-2">Phone: +91 9876543210</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-accent">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-accent">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-border pt-4 text-center text-sm">
        <p>&copy; 2024 Amal Library. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
