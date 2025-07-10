import { useEffect } from 'react' 
import AOS from "aos";
import "aos/dist/aos.css";  

function TrackList() {
  useEffect(() => {
    AOS.init();
     }, []); 

  return (
    <section className='w-full min-h-screen bg-gray-900 text-white py-12 px-6' data-aos="fade-up">
      <div className='w-full h-full flex flex-col'>
        {/* Titre principal */}
        <div className='text-center mb-16'>
          <h2 className='text-8xl md:text-[10rem] lg:text-[15rem] xl:text-[18rem] font-black text-orange-400 mb-8 leading-none tracking-tighter' data-aos="fade-up" data-aos-delay="200">
            TRACK LIST
          </h2>
          <p className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-[0.3em]' data-aos="fade-up" data-aos-delay="400">
            RETROUVE TOUS LES SONS DE L'ALBUM
          </p>
        </div>

        {/* Liste des morceaux - Pleine largeur */}
        <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32' data-aos="fade-up" data-aos-delay="600">
          {/* Colonne gauche */}
          <div className='space-y-12 lg:space-y-16' data-aos="fade-right" data-aos-delay="800">
            <div className='group' data-aos="fade-up" data-aos-delay="1000">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  01.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    SUPREME
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Heaven Sam
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1200">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  02.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    ZEOUIN THEORY
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Tudo BEN
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1400">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  03.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    NOUVEAU KARATE
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Medeline - Kimo
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1600">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  04.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    LES ALMADIES
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Zafy
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1800">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  05.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    DIEU EST GRANDE
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Cehashi
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="2000">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  06.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    FAIRE MIEUX
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Jean Jass - Dee Eye
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="2200">
              <div className='flex items-start gap-8 lg:gap-12'>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  07.
                </span>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    GOSPEL MOLOTEV
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Cehashi
                  </p>
                </div>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className='space-y-12 lg:space-y-16' data-aos="fade-left" data-aos-delay="800">
            <div className='group' data-aos="fade-up" data-aos-delay="1000">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    GRANDS BOUBOUS
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Balach
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .08
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1200">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    PROSE COMBAT
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Aanche - AZB
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .09
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1400">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    AMOUR SUPREME
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Cehashi
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .10
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1600">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    GOD BLESS
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Heaven Sam - Dom Jordy
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .11
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="1800">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    GIGI
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Manu Manu
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .12
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>

            <div className='group' data-aos="fade-up" data-aos-delay="2000">
              <div className='flex items-start gap-8 lg:gap-12 justify-end text-right'>
                <div className='flex-1'>
                  <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 lg:mb-6 leading-tight'>
                    PRIER SANS CRAINTE
                  </h3>
                  <p className='text-gray-300 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 leading-relaxed'>
                    Écrit par Youssoupha Mabiki
                  </p>
                  <p className='text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed'>
                    Composé par Lucci - Uraken
                  </p>
                </div>
                <span className='text-orange-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black flex-shrink-0'>
                  .13
                </span>
              </div>
              <div className='border-b border-gray-700 mt-8 lg:mt-12'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackList; 