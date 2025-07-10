import React, { useState } from 'react'
import Image2 from '../IMG/img2.png'
import Panier from '../IMG/panier.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='text-black py-4 px-4 md:py-6 md:px-4'>
      <nav className='container mx-auto'>
        <div className='flex justify-center items-center relative'>
          {/* Version mobile */}
          <div className='md:hidden w-full'>
            <div className='flex justify-between items-center'>
              <img 
                src={Image2} 
                alt="Logo" 
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='flex items-center space-x-4'>
                <img 
                  src={Panier} 
                  alt="Panier" 
                  className='w-6 h-6 cursor-pointer'
                />
                <button 
                  onClick={toggleMenu}
                  className='flex flex-col space-y-1 cursor-pointer'
                >
                  <span className='w-6 h-0.5 bg-black'></span>
                  <span className='w-6 h-0.5 bg-black'></span>
                  <span className='w-6 h-0.5 bg-black'></span>
                </button>
              </div>
            </div>
            
            {/* Menu mobile qui s'ouvre/ferme */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} mt-4 bg-white border-t border-gray-200 pt-4`}>
              <ul className='flex flex-col space-y-3 text-sm font-semibold'>
                <li>
                  <a href='#tournee' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-3 py-2 block text-center'>
                    TOURNEE
                  </a>
                </li>
                <li>
                  <a href='#disque' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-3 py-2 block text-center'>
                    DISQUE
                  </a>
                </li>
                <li>
                  <a href='#trackliste' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-3 py-2 block text-center'>
                    TRACKLISTE
                  </a>
                </li>
                <li>
                  <a href='#blog' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-3 py-2 block text-center'>
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Version desktop - garde l'emplacement exact */}
          <ul className='hidden md:flex md:flex-row md:space-x-12 text-lg font-semibold'>
            <li>
              <a href='#tournee' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-4 py-2 block text-center'>
                TOURNEE
              </a>
            </li>
            <li>
              <a href='#disque' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-4 py-2 block text-center'>
                DISQUE
              </a>
            </li>
            <li className='flex items-center mx-8'>
              <img 
                src={Image2} 
                alt="Logo" 
                className='w-10 h-10 object-cover rounded-full'
              />
            </li>
            <li>
              <a href='#trackliste' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-4 py-2 block text-center'>
                TRACKLISTE
              </a>
            </li>
            <li>
              <a href='#blog' className='transition-colors duration-300 cursor-pointer hover:text-blue-600 px-4 py-2 block text-center'>
                BLOG
              </a>
            </li>
          </ul>
          
          {/* Panier desktop - positionné à droite */}
          <img 
            src={Panier} 
            alt="Panier" 
            className='hidden md:block w-40 h-14 cursor-pointer absolute right-0'
          />
        </div>
      </nav>
    </header>
  )
}
