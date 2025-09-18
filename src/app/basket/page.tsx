"use client";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BasketPage() {
  const { cart, loading, updateProductQuantity, removeFromCart } = useCart();
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Shopping Basket</h1>
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Please sign in to view your basket</p>
          <Button asChild className="text-sm sm:text-base">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Shopping Basket</h1>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your basket...</p>
        </div>
      </div>
    );
  }

  if (!cart || cart.products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Shopping Basket</h1>
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Your basket is empty</p>
          <Button asChild className="text-sm sm:text-base">
            <Link href="/items">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Shopping Basket</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary (يظهر فوق في الموبايل) */}
        <div className="order-1 lg:order-2 lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({cart.products.length} items):</span>
                <span className="font-semibold">${cart.totalCartPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-2xl text-blue-600">${cart.totalCartPrice}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                <Link href="/payment">Proceed to Checkout</Link>
              </Button>
              <Button asChild variant="outline" className="w-full text-sm sm:text-base">
                <Link href="/items">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <div className="space-y-4">
            {cart.products.map((item) => (
              <div key={item.product._id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">
                      {item.product.title}
                    </h3>
                    
                    {/* Price Display */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 justify-center sm:justify-start">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Unit Price:</span>
                        <span className="text-base sm:text-lg font-bold text-red-600">
                          ${item.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Total:</span>
                        <span className="text-lg sm:text-xl font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          ${(item.price * item.count).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <span className="text-sm text-gray-500">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateProductQuantity(item.product._id, item.count - 1)}
                          className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                          disabled={item.count <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 sm:px-4 py-2 font-semibold min-w-[2.5rem] sm:min-w-[3rem] text-center">
                          {item.count}
                        </span>
                        <button
                          onClick={() => updateProductQuantity(item.product._id, item.count + 1)}
                          className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
