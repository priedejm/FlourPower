import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { instagramPosts } from "../data/products";

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Stay updated with our latest creations, behind-the-scenes moments, and special offers.
          </p>
          <div className="flex items-center justify-center mt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Icon icon="logos:instagram-icon" className="text-xl" />
              <span>@flourpowerbakery</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden" disableRipple>
                <CardBody className="p-0">
                  <div className="relative group">
                    <img 
                      src={post.image} 
                      alt={`Instagram post ${post.id}`}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                      <p className="text-sm line-clamp-3 mb-2">{post.caption}</p>
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:heart" className="text-red-500" />
                        <span>{post.likes} likes</span>
                      </div>
                      <span className="text-xs mt-2 text-white/80">{post.date}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:heart" className="text-red-500" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>
                    <p className="text-sm mt-2 line-clamp-2">{post.caption}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            as="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            variant="flat"
            className="font-medium"
          >
            View More on Instagram
            <Icon icon="lucide:external-link" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};