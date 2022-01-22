
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../localStorageCenter';
import Film, { FilmInterface } from './Film';



const Favoris = () => {

  const{getFavoriteFilm}=useLocalStorage()
  const [filmFavoris,setFilmFavoris]=useState<FilmInterface[]>([])

  useEffect(()=>{
    setFilmFavoris(getFavoriteFilm())
  },[filmFavoris.length])

  const setFavoriteInFilmComponent =()=>{
    setFilmFavoris(getFavoriteFilm())
  }

  if (filmFavoris?.length<1)return(<div className='spinContainer text-center d-flex align-items-center justify-content-center fw-bolder fs-1'>Vous n'avez pas de films favoris pour le moment.....</div>) 
  return (
    <div className='container-fluid'>
    <div className='row d-flex justify-content-around'>
         {filmFavoris?.map((film:FilmInterface,i)=>(<Film setFavoriteInFilmComponent={setFavoriteInFilmComponent}  film={film} key={i} />))}
    </div>
 </div>
  )
};

export default Favoris;
