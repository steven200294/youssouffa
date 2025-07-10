# 🎵 Site Web de Youssoupha - Amour Suprême

Site web officiel de **Youssoupha Mabiki** présentant son dernier album **"Amour Suprême"**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## 📖 Description

Ce site présente l'univers de **Youssoupha Mabiki**, rappeur franco-congolais reconnu pour ses textes puissants et engagés. Le site met en avant son dernier projet **"Amour Suprême"**, qui dévoile une facette plus apaisée et spirituelle de l'artiste.

## ✨ Fonctionnalités

- 📱 **Design responsive** pour mobile et desktop
- 🎨 **Interface moderne** avec animations AOS (Animate On Scroll)
- 🎵 **Présentation de l'album** "Amour Suprême"
- 👤 **Biographie complète** de l'artiste
- 🎤 **Section tournée** avec dates de concerts en temps réel
- 🎼 **Track list interactive** avec tous les morceaux de l'album
- 📖 **Section blog** pour les dernières actualités
- 🛒 **Panier d'achat** pour la merchandising
- 🔄 **Carrousel de disques** interactif
- 🔗 **Réseaux sociaux** intégrés
- 🔥 **Connexion Firebase** pour la gestion des concerts

## 🛠️ Technologies utilisées

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Base de données**: Firebase Firestore
- **Authentification**: Firebase Auth
- **Build**: Vite
- **Language**: JavaScript ES6+

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/steven200294/youssouffa.git
cd youssouffa
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir le navigateur**
```
http://localhost:5173
```

## 📦 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter
npm run lint
```

## 🎯 Structure du projet

```
src/
├── components/           # Composants React
│   ├── Header.jsx       # Navigation principale
│   ├── DisqueCarousel.jsx # Carrousel des disques
│   ├── TrackList.jsx    # Liste des morceaux
│   └── ConcertData.jsx  # Gestion des concerts
├── IMG/                 # Images et assets
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🎨 Fonctionnalités principales

### 🏠 Page d'accueil
- Présentation de l'album avec animations
- Hero section avec titre dynamique
- Citations et biographie de l'artiste

### 🎤 Section Tournée
- **Gestion dynamique** des concerts via Firebase
- **Administration** en temps réel
- **Statuts** : Disponible / Complet / Annulé
- **Interface responsive** pour tous les écrans

### 🎵 Track List
- **13 morceaux** avec détails complets
- **Layout en colonnes** responsive
- **Animations** au scroll pour chaque track
- **Informations** : compositeur, parolier

### 🔥 Intégration Firebase
- **Base de données** Firestore pour les concerts
- **Authentification** pour l'administration
- **Temps réel** pour les mises à jour

## 👨‍🎤 À propos de Youssoupha

**Youssoupha Mabiki** est un rappeur franco-congolais, fils du légendaire chanteur **Tabu Ley Rochereau**. Il s'impose comme une voix majeure du rap français avec des albums comme :

- 🎵 **"Noir Désir"**
- 🎵 **"NGRTD"** 
- 🎵 **"Amour Suprême"** (dernier album)

Son style unique mélange **conscience sociale**, **introspection** et **amour des mots**, créant une musique à la fois **engagée** et **spirituelle**.

## 🎨 Design & UX

- **Interface moderne** et épurée
- **Animations fluides** avec AOS
- **Navigation intuitive** 
- **Responsive design** pour tous les appareils
- **Performance optimisée** avec Vite

## 📱 Responsive Design

Le site s'adapte parfaitement à tous les écrans :
- 📱 **Mobile** : Navigation hamburger, layout vertical
- 💻 **Desktop** : Navigation horizontale, layout multi-colonnes
- 📐 **Tablet** : Adaptation automatique des composants

## 🔧 Configuration Firebase

Pour utiliser les fonctionnalités Firebase :

1. Créer un projet sur [Firebase Console](https://console.firebase.google.com)
2. Configurer Firestore Database
3. Ajouter la configuration dans `src/composant/ConcertData.jsx`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. **Fork** le projet
2. Créer une **branche** pour votre fonctionnalité
3. **Commit** vos changements
4. **Push** vers la branche
5. Ouvrir une **Pull Request**

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Développeur**: Steven
- **GitHub**: [@steven200294](https://github.com/steven200294)
- **Projet**: [youssouffa](https://github.com/steven200294/youssouffa)

---

⭐ **N'hésitez pas à mettre une étoile si vous aimez ce projet !** ⭐
