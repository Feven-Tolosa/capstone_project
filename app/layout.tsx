import Navbar from '@/src/components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
        <Navbar />
        <main className='pt-20'>
          {' '}
          {/* Add padding to account for fixed navbar */}
          {children}
        </main>
      </body>
    </html>
  )
}
