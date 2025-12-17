import React from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { galleryImages } from "../data/products";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Take a peek at our bakery and the delicious treats we create with passion and care every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <div className="aspect-w-4 aspect-h-3 relative group">
                <Image
                  src={image}
                  alt={`Bakery gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  removeWrapper
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Flour Power Bakery</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};