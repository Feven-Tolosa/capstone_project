export default function ProductSkeleton() {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden animate-pulse'>
      <div className='aspect-square bg-gray-200' />
      <div className='p-4 space-y-3'>
        <div className='h-5 bg-gray-200 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2'></div>
        <div className='flex justify-between items-center'>
          <div className='h-6 bg-gray-200 rounded w-1/3'></div>
          <div className='h-8 w-8 bg-gray-200 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
