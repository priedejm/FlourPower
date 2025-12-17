import React from "react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content3 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:cake" className="text-primary text-2xl" />
              <h3 className="font-playfair font-semibold text-xl">Flour Power</h3>
            </div>
            <p className="text-foreground/70 mb-4">
              Artisan bakery crafting delicious breads, pastries, and cakes using traditional methods and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Icon icon="lucide:facebook" className="text-xl" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Icon icon="lucide:instagram" className="text-xl" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Icon icon="lucide:twitter" className="text-xl" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Icon icon="lucide:youtube" className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/70 hover:text-primary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#instagram" className="text-foreground/70 hover:text-primary transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Order Online</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Artisan Breads</a>
              </li>
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Pastries</a>
              </li>
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Cakes</a>
              </li>
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Cookies</a>
              </li>
              <li>
                <a href="#order" className="text-foreground/70 hover:text-primary transition-colors">Custom Orders</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                <span className="text-foreground/70">123 Bakery Street, Flourville, CA 90210</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:phone" className="text-primary mt-1" />
                <span className="text-foreground/70">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:mail" className="text-primary mt-1" />
                <span className="text-foreground/70">hello@flourpowerbakery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:clock" className="text-primary mt-1" />
                <div className="text-foreground/70">
                  <p>Mon-Fri: 7am - 7pm</p>
                  <p>Sat-Sun: 8am - 5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Flour Power Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};