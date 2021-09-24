import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Albums from "./components/Albums";


function App() {
  const albums = [
    {
      id: 1,
      artist: "A.R. Rahman",
      album_title: "Rockstar",
      album_cover: "/Rockstar.jpg",
    },
    {
      id: 2,
      artist: "A.R. Rahman",
      album_title: "Jodhaa Akbar",
      album_cover: "/J.jpg",
    },
    {
      id: 3,
      artist: "A.R. Rahman",
      album_title: "Highway",
      album_cover: "/Highway.jpg",
    },
    {
      id: 4,
      artist: "A.R. Rahman",
      album_title: "Raanjhanaa",
      album_cover: "/Ranj.jpg",
    },
    {
      id: 5,
      artist: "A.R. Rahman",
      album_title: "Rang De Basanti",
      album_cover:  "/Rang.jpg",
    },
  ];

  return (
    <>
      <div class="body">
      <Router>
        <Navbar />
        <Albums albums={albums} />
        </Router>
      </div>
   </>
  );
  
}
  export default App;


