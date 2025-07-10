import { useState } from 'react';
import Disque1 from '../IMG/Disque1.jpg';
import Disque2 from '../IMG/Disque2.jpg';
import Disque3 from '../IMG/Disque3.jpg';
import Disque4 from '../IMG/Disque4.jpg';

function DisqueCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const disques = [
    {
      id: 1,
      image: Disque1,
      title: "AMOUR SUPREME - VINYLE",
      price: "25,99 €"
    },
    {
      id: 2,
      image: Disque2,
      title: "AMOUR SUPREME - COLLECTOR",
      price: "45,99 €"
    },
    {
      id: 3,
      image: Disque3,
      title: "AMOUR SUPREME - PACK",
      price: "80,99 €"
    },
    {
      id: 4,
      image: Disque4,
      title: "NEPTUNE TERMINUS - CD",
      price: "25,99 €"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === disques.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? disques.length - 1 : prevIndex - 1
    );
  };

  const getVisibleDisques = () => {
    const visibleCount = 4; // Nombre de disques visibles en même temps
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % disques.length;
      visible.push(disques[index]);
    }
    
    return visible;
  };

  return (
    <section className='w-full bg-white text-black py-12 md:py-20 lg:py-32 px-4 md:px-8'>
      <div className='max-w-full mx-auto'>
        {/* Titre principal - Responsive */}
        <div className='mb-16 md:mb-20 lg:mb-28 text-center md:text-left'>
          <h2 className='text-6xl md:text-8xl lg:text-[10rem] xl:text-[15rem] 2xl:text-[18rem] font-black text-black mb-4 md:mb-6 lg:mb-8 leading-none tracking-tight'>
            DISQUES
          </h2>
          <p className='text-red-600 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wide md:tracking-widest px-4 md:px-0'>
            RETROUVE TOUS LES DISQUES ET PACKS D'AMOUR SUPREME
          </p>
        </div>

        {/* Carrousel responsive */}
        <div className='relative w-full'>
          {/* Version Mobile - 1 carte centrée */}
          <div className='block md:hidden'>
            <div className='flex justify-center items-center mb-8'>
              <div className='bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden w-80 max-w-[90vw] h-[550px] flex flex-col transform hover:scale-105 transition-transform duration-300'>
                {/* Image du disque */}
                <div className='h-96 overflow-hidden'>
                  <img 
                    src={disques[currentIndex].image} 
                    alt={disques[currentIndex].title}
                    className='w-full h-full object-cover'
                  />
                </div>
                
                {/* Contenu de la carte */}
                <div className='p-6 flex flex-col justify-between flex-grow bg-gray-50'>
                  <h3 className='text-center text-lg font-black text-black uppercase tracking-wider mb-4'>
                    {disques[currentIndex].title}
                  </h3>
                  <p className='text-center text-2xl font-black text-black'>
                    {disques[currentIndex].price}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation mobile */}
            <div className='flex justify-center items-center gap-6'>
              <button 
                onClick={prevSlide}
                className='w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg'
                aria-label="Disque précédent"
              >
                <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>
              
              <span className='text-gray-600 font-semibold'>
                {currentIndex + 1} / {disques.length}
              </span>
              
              <button 
                onClick={nextSlide}
                className='w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg'
                aria-label="Disque suivant"
              >
                <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>

          {/* Version Desktop - Multiple cartes */}
          <div className='hidden md:block'>
            <div className='relative w-full flex justify-end pr-4 lg:pr-8'>
              <div className='relative w-full lg:w-[95%] xl:w-[90%] ml-auto'>
                {/* Container des cartes - Plus grandes */}
                <div className='flex justify-center lg:justify-end items-center gap-6 lg:gap-8 xl:gap-12 mb-12 lg:mb-16 overflow-x-auto pb-4'>
                  {getVisibleDisques().map((disque, index) => (
                    <div key={`${disque.id}-${currentIndex}-${index}`} 
                         className='bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden w-72 lg:w-80 xl:w-96 h-[500px] lg:h-[550px] xl:h-[600px] flex flex-col transform hover:scale-105 transition-transform duration-300 flex-shrink-0'>
                      {/* Image du disque */}
                      <div className='h-80 lg:h-96 xl:h-[420px] overflow-hidden'>
                        <img 
                          src={disque.image} 
                          alt={disque.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      
                      {/* Contenu de la carte */}
                      <div className='p-6 lg:p-8 xl:p-10 flex flex-col justify-between flex-grow bg-gray-50'>
                        <h3 className='text-center text-base lg:text-lg xl:text-xl font-black text-black uppercase tracking-wider mb-4 lg:mb-6'>
                          {disque.title}
                        </h3>
                        <p className='text-center text-xl lg:text-2xl xl:text-3xl font-black text-black'>
                          {disque.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Boutons de navigation desktop */}
                <div className='flex justify-center lg:justify-end items-center'>
                  <div className='flex gap-4 lg:gap-6'>
                    <button 
                      onClick={prevSlide}
                      className='w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg'
                      aria-label="Disque précédent"
                    >
                      <svg className='w-8 h-8 lg:w-10 lg:h-10 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={nextSlide}
                      className='w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg'
                      aria-label="Disque suivant"
                    >
                      <svg className='w-8 h-8 lg:w-10 lg:h-10 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisqueCarousel; 