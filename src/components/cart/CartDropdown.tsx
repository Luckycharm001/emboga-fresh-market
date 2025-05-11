
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export const CartDropdown = () => {
  const { cart, totalItems, totalPrice, removeFromCart } = useCart();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <h3 className="font-medium p-2 text-center border-b">Shopping Cart ({totalItems})</h3>
        
        {cart.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-auto">
              {cart.map(item => (
                <DropdownMenuItem key={item.id} className="flex items-center p-2 focus:bg-background cursor-default">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-3" />
                  <div className="flex-grow">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {item.quantity} × KSh {item.price.toFixed(2)}
                      </span>
                      <span className="font-medium">KSh {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromCart(item.id);
                    }}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 ml-2"
                  >
                    ×
                  </Button>
                </DropdownMenuItem>
              ))}
            </div>
            
            <DropdownMenuSeparator />
            
            <div className="p-3">
              <div className="flex justify-between mb-3">
                <span>Subtotal:</span>
                <span className="font-bold">KSh {totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex gap-2">
                <Button asChild className="w-1/2 bg-emboga-primary hover:bg-emboga-primary/90">
                  <Link to="/cart">View Cart</Link>
                </Button>
                <Button asChild className="w-1/2 bg-emboga-secondary hover:bg-emboga-secondary/90">
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
