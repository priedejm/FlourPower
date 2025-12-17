import React from "react";
import { Card, CardBody, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { products, ProductType } from "../data/products";
import { useCart } from "../context/cart-context";

export const OnlineOrdering: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };

  return (
    <section id="order" className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Order Online</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Browse our selection of freshly baked goods and place your order for pickup.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md overflow-x-auto scrollbar-hidden">
            <Tabs 
              aria-label="Product categories" 
              selectedKey={selectedCategory}
              onSelectionChange={(key) => setSelectedCategory(key as string)}
              color="primary"
              variant="light"
              classNames={{
                tabList: "bg-content1 rounded-xl p-1 shadow-sm w-max min-w-full",
                cursor: "bg-primary/20 shadow-sm",
                tab: "font-medium text-foreground data-[selected=true]:text-primary-800 whitespace-nowrap",
                tabContent: "group-data-[selected=true]:font-semibold"
              }}
            >
              <Tab key="all" title="All Products" />
              <Tab key="bread" title="Breads" />
              <Tab key="pastry" title="Pastries" />
              <Tab key="cake" title="Cakes" />
              <Tab key="cookie" title="Cookies" />
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full" disableRipple>
                <CardBody className="p-0 flex flex-col">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-content1/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full font-medium">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-foreground/70 text-sm mb-4 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-semibold">{formatPrice(product.price)}</span>
                      <Button 
                        color="primary" 
                        variant="flat" 
                        size="sm"
                        onPress={() => handleAddToCart(product)}
                      >
                        Add to Cart
                        <Icon icon="lucide:shopping-bag" className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};