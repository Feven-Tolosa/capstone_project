import { Sofa, Armchair, BedDouble } from 'lucide-react'

export default function Home() {
  return (
    <main className='min-h-screen bg-wood-100'>
      {/* Hero with wood texture */}
      <section className="bg-[url('/wood-texture.jpg')] bg-cover bg-center py-32 text-white">
        <div className='container mx-auto px-4 text-center backdrop-brightness-50 py-20 rounded-xl'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Crafted Furniture for Modern Living
          </h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Handmade pieces blending tradition with contemporary design
          </p>
          <button className='bg-primary-600 hover:bg-primary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'>
            Explore Collection
          </button>
        </div>
      </section>

      {/* Category Grid */}
      <section className='container mx-auto py-16 px-4'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
          Our Craftsmanship
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              name: 'Lounge Collection',
              icon: <Sofa className='w-12 h-12 mx-auto' />,
              count: '24 Pieces',
            },
            {
              name: 'Seating Art',
              icon: <Armchair className='w-12 h-12 mx-auto' />,
              count: '18 Designs',
            },
            {
              name: 'Sleep Sanctuary',
              icon: <BedDouble className='w-12 h-12 mx-auto' />,
              count: '12 Variants',
            },
          ].map((item) => (
            <div
              key={item.name}
              className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='text-wood-800 mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.name}</h3>
              <p className='text-wood-400'>{item.count}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
