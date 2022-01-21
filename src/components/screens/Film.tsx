import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../localStorageCenter';
import ButtonMovies from './button';

interface FilmProps {
    film:FilmInterface
    setFavoriteInFilmComponent?:()=>void

}

export interface FilmInterface{
    adult:boolean
    backdrop_path:string
    genre_ids:number[]
    id:number
    original_language:string
    original_title:string
    overview:string
    popularity:number
    poster_path:string
    release_date:string
    title:string
    video:boolean
    vote_average:number
    vote_count:number
}

type filmType = (props: FilmProps) => JSX.Element;

const Film: filmType = (props:FilmProps):JSX.Element => {
    const{film}=props
    const filmPath:string=`https://image.tmdb.org/t/p/w500${film.poster_path}`;
    const {getFavoriteFilm,setFavoriteFilm,setDetailsFilms,removeFilm}=useLocalStorage()
    const [arrayFilm,setArrayFilm]=useState<FilmInterface[]>([])
    const [filmInLocalStorage, setFilmInLocalStorage] = useState(false)
    const hystory = useNavigate()

    useEffect(()=>{
        setArrayFilm(getFavoriteFilm())
        setFilmInLocalStorage(arrayFilm.find(el=>el.id===film.id)!==undefined?true:false)
    },[arrayFilm.length,filmInLocalStorage])

    const addFilmInLocalStorage=()=>{
        setFavoriteFilm(film)
        setFilmInLocalStorage(true)
    }

    const gotToDetailsFilm = (film:FilmInterface) => {
        setDetailsFilms(film);
        hystory("/details")
    }

    const remooveFilmInLocalStorage=()=>{
            removeFilm(film)
            setFilmInLocalStorage(false)
            if (props.setFavoriteInFilmComponent) {
                props.setFavoriteInFilmComponent()
            }
    }
    
    if (!film) return(<></>)
   

  return (
      <div className='filmCard col-sm-12 col-md-4 col-lg-3  d-block mt-5 shadow-lg p-3 mb-5 bg-body ' key={props.film.id}>
          <img src={filmPath} style={{cursor: 'pointer'}} onClick={()=>gotToDetailsFilm(film)} className="img-fluid mx-auto d-block" alt="" />
          <div className='bodyCard col-12 text-center'>
            <h5 className='cardTitle'>{film.title}</h5>
            <p><span className='infoDate'> Date de sortie:</span> 
                <span className='dateCard'> {film.release_date}</span>
            </p>
            <ButtonMovies addFilmInLocalStorage={filmInLocalStorage?remooveFilmInLocalStorage : addFilmInLocalStorage} isInFavorite={filmInLocalStorage}/>
          </div>
      </div>
  );
};

export default Film;
