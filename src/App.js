import './App.css';
import Movie from './Components/Movie';


function App() {
  const itemData = [
    {
      name: "Bright",
      poster:"https://wallpapercave.com/wp/wp2354003.jpg",
      img: 'https://i0.wp.com/www.ourmovielife.com/wp-content/uploads/2017/12/Bright-movie-banner.jpg?fit=1280%2C640&ssl=1',
      title: 'Collection',
      about: 'Most Popular around the World',
      featured: true,
      year:2017,
      actor_name:"David Ayer",
      time:"117 min",
      text:"Set in a world where fantasy creatures live side by side with humans.A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."

    },
    {
      name: "Tom Raider",
      poster:"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
      img: 'https://c4.wallpaperflare.com/wallpaper/532/570/514/movie-tomb-raider-2018-alicia-vikander-lara-croft-wallpaper-preview.jpg',
      title: 'Collection',
      about: 'Great for team building',
      year:2018,
      actor_name:"Roar Uthaug",
      time:"125 min",
      text:"Lara Croft,the fiercely independent daughter of a missing adventurer,must push herself beyond her limits when she finds herself on the island where her father disappeared."
     
    },
   
  ];

  return (
    <div className="App">
      <Movie data={itemData} />

    </div>
  );
}

export default App;
