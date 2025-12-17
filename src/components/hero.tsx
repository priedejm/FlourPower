import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#F9ECD9] via-[#F2D9B7] to-[#E6C49F]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzg4ODg4ODA4IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <motion.div className="mb-8">
            <img
              src="/assets/logo.jpeg"
              alt="Flour Power Bakery Logo"
              className="w-72 h-72 mx-auto rounded-full shadow-lg object-contain bg-white p-4"
            />
          </motion.div>
          
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#2A1E10] mb-6">
            Artisan Baked Goods Made with Love
          </h1>
          <p className="text-lg md:text-xl text-[#2A1E10]/90 mb-8 max-w-xl mx-auto">
            Handcrafted breads, pastries, and cakes baked fresh daily using traditional methods and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              color="primary" 
              size="lg" 
              className="font-medium"
              as="a"
              href="#order"
            >
              Order Online
            </Button>
            <Button 
              variant="bordered" 
              size="lg" 
              className="text-[#2A1E10] border-[#2A1E10] font-medium hover:bg-[#2A1E10]/10"
              as="a"
              href="#gallery"
            >
              View Our Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};