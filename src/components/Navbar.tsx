'use client' // Required for interactivity

import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 py-3'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <span className='text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent'>
              FurniCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/shop'>Shop</NavLink>
            <NavLink href='/about'>Our Story</NavLink>
            <NavLink href='/contact'>Contact</NavLink>

            <div className='flex items-center gap-4'>
              <button className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
                <ShoppingBag className='text-gray-700' />
                <span className='sr-only'>Cart</span>
              </button>
              {/* <button className='px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors'>
                Login
              </button> */}

              {user ? (
                <div className='flex items-center gap-2'>
                  <img
                    src={user.photoURL || '/default-avatar.jpg'}
                    alt={user.displayName || 'User'}
                    className='w-8 h-8 rounded-full'
                  />
                </div>
              ) : (
                <button
                  onClick={() => signInWithGoogle()}
                  className='px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors'
                >
                  Login
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}

        {isOpen && (
          <div className='md:hidden mt-4 pb-4 space-y-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in'>
            <MobileNavLink href='/' onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href='/shop' onClick={() => setIsOpen(false)}>
              Shop
            </MobileNavLink>
            <MobileNavLink href='/about' onClick={() => setIsOpen(false)}>
              Our Story
            </MobileNavLink>
            <MobileNavLink href='/contact' onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>

            <div className='pt-4 border-t border-gray-200 flex gap-3'>
              <button
                className='flex-1 py-3 border border-gray-300 rounded-lg font-medium'
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
              <button
                className='flex-1 py-3 bg-amber-600 text-white rounded-lg font-medium flex items-center justify-center gap-2'
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag size={18} />
                Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Reusable NavLink Component
const [signInWithGoogle] = useSignInWithGoogle(auth)
const { user } = useAuth()
function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 hover:text-amber-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
    >
      {children}
    </Link>
  )
}

// Mobile NavLink Variant
function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className='block px-4 py-2 text-lg text-gray-700 hover:bg-amber-50 rounded-lg transition-colors'
    >
      {children}
    </Link>
  )
}
