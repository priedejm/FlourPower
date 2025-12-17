import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-visible rounded-2xl shadow-md relative">
              <img 
                src="/assets/logo.jpeg" 
                alt="Flour Power Bakery Owner" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-content1 p-4 rounded-xl shadow-lg z-10">
                <p className="font-playfair italic text-base md:text-lg text-[#2A1E10] whitespace-nowrap">"Baking with passion since 2005"</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            
            <p className="text-foreground/80 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <p className="text-foreground/80 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon icon="lucide:wheat" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Artisanal Methods</h3>
                  <p className="text-sm text-foreground/70">Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon icon="lucide:leaf" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Local Ingredients</h3>
                  <p className="text-sm text-foreground/70">Adipiscing elit sed do eiusmod tempor</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon icon="lucide:heart" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Made with Love</h3>
                  <p className="text-sm text-foreground/70">Incididunt ut labore et dolore magna</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon icon="lucide:users" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Community First</h3>
                  <p className="text-sm text-foreground/70">Quis nostrud exercitation ullamco laboris</p>
                </div>
              </div>
            </div>
            
            <p className="text-foreground/80">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};