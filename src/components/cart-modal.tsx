import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cart-context";
import { addToast } from "@heroui/react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleCheckout = () => {
    if (items.length === 0) {
      addToast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
      });
      return;
    }

    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      addToast({
        title: "Order placed!",
        description: "Your order has been placed successfully.",
      });
      clearCart();
      setIsCheckingOut(false);
      onClose();
    }, 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-playfair">
              Your Cart
            </ModalHeader>
            <ModalBody>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Icon icon="lucide:shopping-bag" className="text-5xl text-default-300 mb-4" />
                  <p className="text-default-500">Your cart is empty</p>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    className="mt-4"
                    onPress={onClose}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b border-divider pb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-default-500 text-small">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="flat"
                          onPress={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Icon icon="lucide:minus" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity.toString()}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                              updateQuantity(item.id, value);
                            }
                          }}
                          className="w-16 text-center"
                        />
                        <Button 
                          isIconOnly 
                          size="sm" 
                          variant="flat"
                          onPress={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon icon="lucide:plus" />
                        </Button>
                      </div>
                      <Button 
                        isIconOnly 
                        color="danger" 
                        variant="light"
                        onPress={() => removeFromCart(item.id)}
                      >
                        <Icon icon="lucide:trash-2" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center pt-4 font-medium">
                    <span>Total:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button 
                color="danger" 
                variant="light" 
                onPress={onClose}
              >
                Close
              </Button>
              <Button 
                color="primary" 
                onPress={handleCheckout}
                isLoading={isCheckingOut}
              >
                Checkout
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};