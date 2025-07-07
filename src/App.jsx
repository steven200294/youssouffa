import './App.css'
import Header from './composant/Header'
import Image1 from  './IMG/img1.png'
import Image3 from  './IMG/img3.jpg'
import Image4 from  './IMG/img4.png'



function App() {


  return (
    <>
    <Header />
    <main className='flex flex-col justify-center items-center  min-h-screen'>
      {/* Section principale */}
      <section className='w-[95%] md:w-[55%] flex justify-center items-center h-250'>
      <section id='firstsection' className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-16 gap-8 lg:gap-16 overflow-hidden'>
        
        {/* Texte */}
        <div className='text-black text-center lg:text-left flex flex-col space-y-4 lg:space-y-[5rem] order-2 lg:order-1 lg:flex-1'>
          <h1 className='text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] font-bold leading-tight relative z-20'>
            AMOUR SUPREME 
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4'>24/01/2025</p>
        </div>

        {/* Image */}
        <div className='flex items-center justify-center order-1 lg:order-2 lg:flex-1'>
          <img 
            src={Image1}  
            alt="Amour Supreme" 
            className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] 2xl:w-[700px] 2xl:h-[700px] object-cover rounded-lg shadow-lg relative z-10' 
          />
        </div>       
      </section>
      </section>
      
      {/* Section secondaire responsive */}
      <section id='secondsection' className='w-full bg-gray-900 text-white min-h-screen py-8 md:py-16 lg:h-[130vh]'>
        {/* Première partie - Image et citation */}
        <div className='flex flex-col md:flex-row w-full mt-8 md:mt-40 h-auto md:h-[40%] justify-center items-center px-4 md:px-0'>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full mb-8 md:mb-0'>
            <img src={Image3} alt="Amour Supreme" className='w-full h-full object-cover rounded-lg md:rounded-none' />
          </div>
          <div className='flex justify-center items-center text-center w-full md:w-[50%] h-auto md:h-[50%] px-4 md:px-8'>
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
          <div className='flex flex-col justify-center items-center text-center relative md:bottom-40 w-full md:w-[50%] h-auto md:h-[50%] space-y-6 md:space-y-10 order-2 md:order-1 mt-8 md:mt-0'>
            <h2 className='text-2xl md:text-4xl font-bold'>
              YOUSSOUPHA MABIKI
            </h2>
            <div className='flex justify-center items-center'>
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Youssoupha Mabiki est un rappeur franco-congolais reconnu pour 
                ses textes puissants, engagés et poétiques. Fils du légendaire 
                chanteur Tabu Ley Rochereau, il construit une carrière marquée 
                par la conscience sociale, l'introspection et l'amour des mots
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-left text-lg md:text-2xl lg:w-150 max-w-md md:max-w-none font-bold'>
                Avec des albums comme Noir Désir ou NGRTD, il s'impose comme 
                une voix majeure du rap français. Son dernier projet, Amour 
                Suprême, dévoile une facette plus apaisée et spirituelle, portée par 
                des messages d'amour et de transmission
              </p>
            </div>
          </div>
          <div className='text-center w-full md:w-[50%] h-[300px] md:h-full order-1 md:order-2'>
            <img src={Image4} alt="Amour Supreme" className=' h-full object-cover rounded-lg md:rounded-none relative lg:left-50 md:pl-12 left-15' />
          </div>
        </div>
      </section>

      
      <section className='w-full  bg-blue-200 text-black h-[30vh] '>


        <h3>SUPREME
        TOUR</h3>
        <div><p>TOUTES LES DATES</p></div>
      </section>
    </main>
    </>
  )
}

export default App
