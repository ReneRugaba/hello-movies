import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/screens/navBar';
import Home from './components/screens/home';
import Favoris from './components/screens/favoris';
import Details from './components/screens/details';
import Footer from './components/screens/footer';


function App():JSX.Element {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/hello-movies'  element={<Home/>}/>
        <Route path='/hello-movies/favoris' element={<Favoris/>} />
        <Route path='/hello-movies/details' element={<Details/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
