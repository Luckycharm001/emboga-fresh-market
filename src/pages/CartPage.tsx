
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, Minus, Plus, ShoppingBag, Trash } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="font-medium">Shopping Cart</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-emboga-primary">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="bg-emboga-primary hover:bg-emboga-secondary">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cart.map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 object-cover rounded mr-4"
                            />
                            <div>
                              <Link to={`/product/${item.id}`} className="font-medium text-emboga-primary hover:underline">
                                {item.name}
                              </Link>
                              <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center">
                            <Button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="h-8 w-10 flex items-center justify-center border-y">
                              {item.quantity}
                            </div>
                            <Button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">KSh {item.price.toFixed(2)}</td>
                        <td className="px-6 py-4 font-medium text-right">KSh {(item.price * item.quantity).toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">
                          <Button 
                            onClick={() => removeFromCart(item.id)} 
                            variant="ghost" 
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  onClick={clearCart}
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  Clear Cart
                </Button>
                <Button asChild className="bg-emboga-primary hover:bg-emboga-secondary">
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 h-fit">
              <h2 className="text-xl font-bold mb-4 pb-4 border-b">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span>KSh {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              
              <div className="py-3 border-t border-b">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-emboga-primary">KSh {totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button asChild className="w-full mt-6 bg-emboga-secondary hover:bg-emboga-secondary/90">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
