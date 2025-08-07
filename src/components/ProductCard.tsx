'use client'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  discount?: number
  material: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
      {/* Discount Badge */}
      {product.discount && (
        <div className='absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10'>
          -{product.discount}%
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className='absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full z-10 hover:bg-rose-50 transition-colors'
      >
        <Heart
          size={18}
          className={isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}
        />
      </button>

      {/* Product Image */}
      <div className='aspect-square overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          loading='lazy'
        />
      </div>

      {/* Product Info */}
      <div className='p-4'>
        <div className='flex justify-between items-start'>
          <h3 className='font-semibold text-lg line-clamp-1'>{product.name}</h3>
          <span className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded'>
            {product.material}
          </span>
        </div>

        {/* Rating */}
        <div className='flex items-center mt-2'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < product.rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className='text-xs text-gray-500 ml-1'>
            ({product.rating}.0)
          </span>
        </div>

        {/* Price */}
        <div className='mt-3 flex items-center justify-between'>
          <div>
            <span className='font-bold text-gray-900'>${product.price}</span>
            {product.discount && (
              <span className='text-xs text-gray-500 line-through ml-2'>
                ${Math.round((product.price * (100 + product.discount)) / 100)}
              </span>
            )}
          </div>
          <button className='flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors'>
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
