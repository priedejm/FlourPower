import React from "react";
import { Form, Input, Textarea, Button, Checkbox, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      addToast({
        title: "Error",
        description: "Please fill out all required fields.",
        color: "danger",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      addToast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubscribed(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-foreground/70 mb-8">
              Have questions about our products, custom orders, or catering services? 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon icon="lucide:map-pin" className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Visit Us</h3>
                  <p className="text-foreground/70">123 Bakery Street, Flourville, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon icon="lucide:phone" className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Call Us</h3>
                  <p className="text-foreground/70">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon icon="lucide:mail" className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email Us</h3>
                  <p className="text-foreground/70">hello@flourpowerbakery.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon icon="lucide:clock" className="text-xl text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Opening Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 7am - 7pm</p>
                  <p className="text-foreground/70">Saturday - Sunday: 8am - 5pm</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-content1 p-6 md:p-8 rounded-xl shadow-sm"
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <Form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                placeholder="Your name"
                value={name}
                onValueChange={setName}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                startContent={
                  <Icon icon="lucide:user" className="text-default-400 text-lg" />
                }
              />
              
              <Input
                label="Email"
                placeholder="Your email address"
                value={email}
                onValueChange={setEmail}
                isRequired
                type="email"
                variant="bordered"
                labelPlacement="outside"
                startContent={
                  <Icon icon="lucide:mail" className="text-default-400 text-lg" />
                }
              />
              
              <Textarea
                label="Message"
                placeholder="How can we help you?"
                value={message}
                onValueChange={setMessage}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                minRows={4}
              />
              
              <Checkbox isSelected={isSubscribed} onValueChange={setIsSubscribed}>
                Subscribe to our newsletter for special offers
              </Checkbox>
              
              <Button 
                type="submit" 
                color="primary" 
                className="w-full font-medium"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};