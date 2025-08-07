import { Star } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  material: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all'>
      <div className='aspect-square overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform'
        />
      </div>
      <div className='p-6'>
        <div className='flex justify-between items-start'>
          <h3 className='font-semibold text-lg'>{product.name}</h3>
          <span className='bg-wood-100 text-wood-800 px-2 py-1 rounded text-sm'>
            {product.material}
          </span>
        </div>

        <div className='flex items-center mt-2'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        <div className='mt-4 flex justify-between items-center'>
          <span className='text-xl font-bold'>${product.price}</span>
          <button className='text-primary-600 hover:text-primary-700 font-medium'>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
