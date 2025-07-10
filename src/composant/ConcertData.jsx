import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCc17zdyEzo4aN_78iPuy0P_uZw1sDv-yM",
  authDomain: "album-bb569.firebaseapp.com",
  projectId: "album-bb569",
  storageBucket: "album-bb569.appspot.com",
  messagingSenderId: "1005918432348",
  appId: "1:1005918432348:web:3dcb4ec776e97512bf8a67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ConcertData() {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        console.log("Tentative de connexion à Firebase...");
        const querySnapshot = await getDocs(collection(db, "tournée"));
        console.log("Nombre de documents trouvés:", querySnapshot.size);
        
        const concertData = [];
        querySnapshot.forEach((doc) => {
          console.log("Document trouvé:", doc.id, doc.data());
          concertData.push({ id: doc.id, ...doc.data() });
        });
        
        console.log("Données des concerts:", concertData);
        setConcerts(concertData);
      } catch (error) {
        console.error("Erreur lors du chargement des concerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  if (loading) {
    return (
      <section className='w-full bg-white text-black py-12 flex items-center justify-center px-4'>
        <div className='text-center'>
          <p className='text-xl'>Chargement des concerts...</p>
        </div>
      </section>
    );
  }

  if (concerts.length === 0) {
    return (
      <section className='w-full bg-white text-black py-12 flex items-center justify-center px-4'>
        <div className='text-center'>
          <p className='text-xl'>Aucun concert trouvé dans la base de données.</p>
          <p className='text-sm mt-2'>Vérifiez la console pour plus de détails.</p>
        </div>
      </section>
    );
  }

  return (
    <section className='w-full bg-white text-black py-12 flex items-center justify-center px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-full px-8'>
        {concerts.map((concert) => (
          <div key={concert.id} className='bg-gray-800 text-white p-12 md:p-16 rounded-lg shadow-lg flex flex-col items-center space-y-8 min-h-[450px] w-full max-w-[800px] mx-auto'>
            <div className='bg-white text-black px-8 py-4 rounded text-xl font-semibold'>
              {new Date(concert.date).toLocaleDateString('fr-FR')}
            </div>
            <div className='text-center space-y-4 w-full'>
              <p className='text-xl text-gray-300 uppercase tracking-wider'>{concert.salle}</p>
              <h3 className='text-5xl md:text-6xl font-bold text-blue-400'>{concert.ville}</h3>
              <p className='text-xl text-gray-300'>{concert.pays}</p>
            </div>
            <button 
              className={`border-2 px-12 py-5 rounded-full transition-colors duration-200 mt-auto text-xl font-semibold ${
                concert.dispo === 'Disponible' 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : concert.dispo === 'Complet'
                  ? 'border-red-500 text-red-500 cursor-not-allowed'
                  : 'border-gray-500 text-gray-500 cursor-not-allowed'
              }`}
              disabled={concert.dispo !== 'Disponible'}
            >
              {concert.dispo === 'Disponible' ? 'Réserver' : concert.dispo}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConcertData; 