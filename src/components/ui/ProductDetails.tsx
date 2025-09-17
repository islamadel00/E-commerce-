'use client';

import { useState } from "react";
import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import { Star, Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react";
import type { Swiper as SwiperType } from 'swiper';
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<Star key={i} size={16} fill="gold" stroke="gold" />);
    } else if (rating >= i + 0.5) {
      stars.push(<Star key={i} size={16} fill="gold" stroke="gold" />); // Half star, but lucide-react doesn't have half star, so full for now
    } else {
      stars.push(<Star key={i} size={16} fill="none" stroke="gold" />);
    }
  }
  return stars;
};

export default function ProductDetails({ product }: { product: Product }) {
  const [, ] = useState<SwiperType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('S');
  const { addToWishlist, removeFromWishlist, isWishlisted, loading } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading) return;
    if (isWishlisted(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product._id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-gray-600">
          <span>Account</span> / <span>Gaming</span> / <span className="text-black font-medium">{product.title}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-2">
            {product.images.slice(0, 4).map((img, index) => (
              <div key={index} className="relative w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                <Image
                  src={img}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Main Product Image */}
          <div className="flex-1">
            <div className="relative w-full h-[500px] bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.imageCover}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            
            {/* Rating and Stock */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(product.ratingsAverage)}</div>
                <span className="text-sm text-gray-600">
                  ({product.ratingsQuantity} Reviews)
                </span>
              </div>
              <div className="text-sm text-gray-600">| In Stock</div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-black mb-6">
              ${product.price}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-8"></div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Colours:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor('blue')}
                  className={`w-8 h-8 rounded-full bg-blue-500 border-2 ${
                    selectedColor === 'blue' ? 'border-black' : 'border-gray-300'
                  }`}
                ></button>
                <button
                  onClick={() => setSelectedColor('red')}
                  className={`w-8 h-8 rounded-full bg-red-500 border-2 ${
                    selectedColor === 'red' ? 'border-black' : 'border-gray-300'
                  }`}
                ></button>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Size:</h3>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border rounded-md font-medium ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Quantity:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)} 
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button 
                onClick={() => addToCart(product._id)} 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold"
              >
                Buy Now
              </Button>
              <Button 
                onClick={() => addToCart(product._id)} 
                variant="outline" 
                className="border-black text-black hover:bg-gray-50 px-8 py-3 rounded-md font-semibold"
              >
                Add To Cart
              </Button>
              <Button 
                variant="outline" 
                onClick={handleWishlistClick}
                className="border-black text-black hover:bg-gray-50 p-3 rounded-md"
              >
                <Heart 
                  size={20} 
                  fill={isWishlisted(product._id) ? "currentColor" : "none"} 
                />
              </Button>
            </div>

            {/* Delivery Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-md">
                <Truck className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Free Delivery</h4>
                  <p className="text-sm text-gray-600">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-md">
                <RotateCcw className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Return Delivery</h4>
                  <p className="text-sm text-gray-600">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}