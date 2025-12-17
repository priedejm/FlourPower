import React from "react";
import { Navbar as HeroNavbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cart-context";
import { CartModal } from "./cart-modal";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { totalItems } = useCart();

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Instagram", href: "#instagram" },
    { name: "Order Online", href: "#order" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <HeroNavbar 
        isMenuOpen={isMenuOpen} 
        onMenuOpenChange={setIsMenuOpen}
        className="bg-background/80 backdrop-blur-md border-b border-divider"
        maxWidth="xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent justify="center" className="sm:justify-start">
          <NavbarBrand>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:cake" className="text-primary text-2xl" />
              <p className="font-playfair font-semibold text-xl tracking-tight">
                Flour Power
              </p>
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <a 
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              aria-label="Cart"
              onPress={() => setIsCartOpen(true)}
              className="relative"
            >
              <Icon icon="lucide:shopping-bag" className="text-xl" />
              {totalItems > 0 && (
                <Badge
                  content={totalItems}
                  color="primary"
                  shape="circle"
                  size="sm"
                  className="absolute -top-1 -right-1"
                />
              )}
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="pt-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <a
                href={item.href}
                className="w-full text-foreground/80 hover:text-foreground py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroNavbar>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};