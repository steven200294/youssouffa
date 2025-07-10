import './App.css'
import { useEffect } from 'react'
import Header from './composant/Header'
import DisqueCarousel from './composant/DisqueCarousel'
import TrackList from './composant/TrackList'
import ConcertData from './composant/ConcertData'
import Image1 from  './IMG/img1.png'
import Image3 from  './IMG/img3.jpg'
import Image4 from  './IMG/img4.png'
import Image5 from  './IMG/img5.jpg'
import Image6 from  './IMG/img6.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
     }, []); 


  return (
    <div>
    <Header />
    <main className='flex flex-col justify-center items-center  min-h-screen'>
      {/* Section principale */}
      <section className='w-[95%] md:w-[85%] flex justify-center items-center h-250'>
      <section id='firstsection' className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-16 gap-8 lg:gap-16 overflow-hidden'>
        
        {/* Texte */}
        <div className='text-black text-center lg:text-left flex flex-col space-y-4 lg:space-y-[5rem] order-2 lg:order-1 lg:flex-1' data-aos="fade-right">
          <h1 className='text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] font-bold leading-tight relative z-20' data-aos="fade-up" data-aos-delay="200">
            AMOUR SUPREME 
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4' data-aos="fade-up" data-aos-delay="400">24/01/2025</p>
        </div>

        {/* Image */}
        <div className='flex items-center justify-center order-1 lg:order-2 lg:flex-1' data-aos="fade-left">
          <img 
            src={Image1}  
            alt="Amour Supreme" 
            className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[500px] xl:w-[700px] xl:h-[700px] 2xl:w-[700px] 2xl:h-[700px] object-cover rounded-lg shadow-lg relative z-10' 
            data-aos-delay="300"
          />
        </div>       
      </section>
      </section>
      
      {/* Section secondaire responsive */}
      <section id='secondsection' className='w-full bg-[#1B1B1B] text-white min-h-screen py-8 md:py-16 lg:h-[160vh]  '>
        {/* Première partie - Image et citation */}
        <div className='flex flex-col md:flex-row w-full mt-8 md:mt-40 h-auto md:h-[40%] justify-center items-center px-4 md:px-0'>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full mb-8 md:mb-0' data-aos="fade-right">
            <img src={Image3} alt="Amour Supreme" className='w-full h-full object-cover rounded-2xl ' />
          </div>
          <div className='flex justify-center items-center text-center w-full md:w-[50%] h-auto md:h-[50%] px-4 md:px-8' data-aos="fade-left" data-aos-delay="200">
            <p className='text-left text-lg md:text-2xl max-w-md md:max-w-none lg:w-150 font-bold'>
              « Je ne suis pas un spécialiste de jazz, mais j'ai souvent 
              entendu parler de 'Love Supreme'. C'est un album habité, 
              avec une vraie spiritualité, un lâcher-prise, une sorte de 
              paix lumineuse. Ce n'est pas la même musique, lui fait du 
              jazz, moi je fais du rap, mais j'étais dans le même état 
              d'esprit. 
            </p>
          </div>
        </div>

        {/* Deuxième partie - Bio et image */}
        <div className='flex flex-col md:flex-row w-full mt-8 md:mt-40 h-auto md:h-[40%] justify-center items-center px-4 md:px-0'>
          <div className='flex flex-col justify-center items-center text-center relative md:bottom-40 w-full md:w-[50%] h-auto md:h-[50%] space-y-6 md:space-y-10 order-2 md:order-1 mt-8 md:mt-0' data-aos="fade-right" data-aos-delay="300">
            <h2 className='text-2xl md:text-4xl font-bold' data-aos="fade-up" data-aos-delay="500">
              YOUSSOUPHA MABIKI
            </h2>
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="700">
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Youssoupha Mabiki est un rappeur franco-congolais reconnu pour 
                ses textes puissants, engagés et poétiques. Fils du légendaire 
                chanteur Tabu Ley Rochereau, il construit une carrière marquée 
                par la conscience sociale, l'introspection et l'amour des mots
              </p>
            </div>
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="900">
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Avec des albums comme Noir Désir ou NGRTD, il s'impose comme 
                une voix majeure du rap français. Son dernier projet, Amour 
                Suprême, dévoile une facette plus apaisée et spirituelle, portée par 
                des messages d'amour et de transmission
              </p>
            </div>
          </div>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full order-1 md:order-2' data-aos="fade-left" data-aos-delay="400">
            <img src={Image4} alt="Amour Supreme" className=' h-full object-cover rounded-lg md:rounded-none relative lg:left-50 md:pl-12 left-15' />
          </div>
        </div>
      </section>

      
      <section className='w-full bg-blue-200 text-black h-[30vh] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-80' data-aos="fade-up">
        <h3 className='text-left relative left-10 text-[3rem] md:text-3xl lg:text-[5rem] font-bold pt-4 md:pt-6 lg:pt-10 -ml-12 md:-ml-24 lg:-ml-32' data-aos="fade-right" data-aos-delay="200">SUPREME
        TOUR</h3>
        <div><p className='text-left relative left-10 text-sm md:text-base lg:text-lg pt-4 md:pt-6 lg:pt-10 -ml-12 md:-ml-24 lg:-ml-32' data-aos="fade-right" data-aos-delay="400">TOUTES LES DATES</p></div>
      </section>
      
      <ConcertData />
      <DisqueCarousel />
      <TrackList />
      
      {/* Section Blog */}
      <section className='w-full bg-white text-black py-16 px-4 md:px-8 lg:px-16' data-aos="fade-up">
        <div className='max-w-6xl ml-8 md:ml-16'>
          <h2 className='text-6xl md:text-8xl lg:text-[10rem] font-black text-left mb-4' data-aos="fade-right" data-aos-delay="200">
            BLOG
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl font-medium text-red-600 uppercase tracking-wider' data-aos="fade-right" data-aos-delay="400">
            RETROUVE LES DERNIERES INFOS DE L'ALBUM
          </p>
        </div>
      </section>
      
      <section id='secondsection' className='w-full  text-black min-h-screen py-8 md:py-16 lg:h-[160vh]  ' data-aos="fade-up">
        {/* Première partie - Image et citation */}
        <div className='flex flex-col md:flex-row w-full mt-8 md:mt-40 h-auto md:h-[40%] justify-center items-center px-4 md:px-0'>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full mb-8 md:mb-0' data-aos="fade-right">
            <img src={Image5} alt="Amour Supreme" className='w-full h-full object-cover rounded-2xl ' />
          </div>
          <div className='flex justify-center items-center text-center w-full md:w-[50%] h-auto md:h-[50%] px-4 md:px-8' data-aos="fade-left" data-aos-delay="200">
            <p className='text-left text-lg md:text-2xl max-w-md md:max-w-none lg:w-150 font-bold'>
              « Je ne suis pas un spécialiste de jazz, mais j'ai souvent 
              entendu parler de 'Love Supreme'. C'est un album habité, 
              avec une vraie spiritualité, un lâcher-prise, une sorte de 
              paix lumineuse. Ce n'est pas la même musique, lui fait du 
              jazz, moi je fais du rap, mais j'étais dans le même état 
              d'esprit. 
            </p>
          </div>
        </div>

        {/* Deuxième partie - Bio et image */}
        <div className='flex flex-col md:flex-row w-full mt-8 md:mt-40 h-auto md:h-[40%] justify-center items-center px-4 md:px-0'>
          <div className='flex flex-col justify-center items-center text-center relative md:bottom-40 w-full md:w-[50%] h-auto md:h-[50%] space-y-6 md:space-y-10 order-2 md:order-1 mt-8 md:mt-0' data-aos="fade-right" data-aos-delay="400">
            <h2 className='text-2xl md:text-4xl font-bold' data-aos="fade-up" data-aos-delay="600">
              YOUSSOUPHA MABIKI
            </h2>
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="800">
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Youssoupha Mabiki est un rappeur franco-congolais reconnu pour 
                ses textes puissants, engagés et poétiques. Fils du légendaire 
                chanteur Tabu Ley Rochereau, il construit une carrière marquée 
                par la conscience sociale, l'introspection et l'amour des mots
              </p>
            </div>
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="1000">
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Avec des albums comme Noir Désir ou NGRTD, il s'impose comme 
                une voix majeure du rap français. Son dernier projet, Amour 
                Suprême, dévoile une facette plus apaisée et spirituelle, portée par 
                des messages d'amour et de transmission
              </p>
            </div>
          </div>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full order-1 md:order-2' data-aos="fade-left" data-aos-delay="500">
            <img src={Image6} alt="Amour Supreme" className=' h-full object-cover rounded-2xl  relative lg:left-50 md:pl-12 left-15' />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='w-full bg-[#1B1B1B] text-white py-16 px-8' data-aos="fade-up">
        <div className='max-w-6xl mx-auto'>
          {/* Réseaux sociaux */}
          <div className='flex space-x-6 mb-16  md:-ml-0 lg:-ml-0 xl:-ml-0 2xl:-ml-[400px]' data-aos="fade-up" data-aos-delay="200">
            <a href="#" className='text-white hover:text-gray-300 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/>
              </svg>
            </a>
            <a href="#" className='text-white hover:text-gray-300 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
              </svg>
            </a>
            <a href="#" className='text-white hover:text-gray-300 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
              </svg>
            </a>
            <a href="#" className='text-white hover:text-gray-300 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
              </svg>
            </a>
          </div>

          {/* Colonnes du footer */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8' data-aos="fade-up" data-aos-delay="400">
            {/* Colonne Produits */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className='text-white font-bold text-lg mb-6'>Produits</h3>
              <ul className='space-y-4'>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Vinyle</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Vinyle Standard</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Vinyle Collector</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Vinyle Ultimate</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>T-shirt</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Hoodies</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Casquette</a></li>
              </ul>
            </div>

            {/* Colonne Infos pratiques */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className='text-white font-bold text-lg mb-6'>Infos pratiques</h3>
              <ul className='space-y-4'>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Nous contacter</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Albums</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Concerts</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>A propos</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Support</a></li>
              </ul>
            </div>

            {/* Colonne Ressources */}
            <div data-aos="fade-up" data-aos-delay="1000">
              <h3 className='text-white font-bold text-lg mb-6'>Ressources</h3>
              <ul className='space-y-4'>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Faq</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Point de vente</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>A propos</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 transition-colors'>Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </main>

    </div>
  )
}

export default App
