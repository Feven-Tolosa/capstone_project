// Add to imports
import { useCartStore } from '@/store/cartStore'

// Inside component:
const { addItem } = useCartStore()

// Update Add to Cart button:
;<button
  onClick={() =>
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }
  className='flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors'
>
  <ShoppingBag size={16} />
</button>
