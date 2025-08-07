import ProductCard from '@/src/components/ProductCard'
import { products } from '@/src/data/products'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Hero Section */}
      <div className='relative h-96 overflow-hidden'>
        <div
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
          }}
        >
          <div className='container mx-auto h-full flex flex-col justify-center text-white px-6'>
            <h1 className='text-5xl font-bold mb-4'>Elevate Your Space</h1>
            <p className='text-xl max-w-2xl'>
              Discover handcrafted furniture blending modern design with
              timeless comfort
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='container mx-auto py-16 px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
