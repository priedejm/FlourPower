import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";
import { Gallery } from "./components/gallery";
import { InstagramFeed } from "./components/instagram-feed";
import { OnlineOrdering } from "./components/online-ordering";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { CartProvider } from "./context/cart-context";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background font-poppins text-foreground">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <Gallery />
          <InstagramFeed />
          <OnlineOrdering />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}