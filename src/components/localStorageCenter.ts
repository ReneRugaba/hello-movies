import { FilmInterface } from "./screens/Film"

export type arrayfilm = FilmInterface[]

export type searchContext = {activePage:number,searchWord:string|undefined,title:string|undefined}

export const useLocalStorage =()=>{

    const getFavoriteFilm=():arrayfilm=>{
        
        return  JSON.parse(localStorage.getItem("films") || '[]')
       
    }

    const setFavoriteFilm:(film:FilmInterface)=>void = (film:FilmInterface)=>{
        const arrayFilm = getFavoriteFilm()
       
        arrayFilm.push(film)
       
        localStorage.setItem("films",JSON.stringify(arrayFilm))
        
    }

    const getDetailsFilm:()=>FilmInterface=()=>{
        return JSON.parse(localStorage.getItem("detailsFilm") || "")
    }

    const setDetailsFilms:(film:FilmInterface)=>void=(film:FilmInterface)=>{
        localStorage.setItem("detailsFilm",JSON.stringify(film))
    }

    const removeFilm:(film:FilmInterface)=>void =(film:FilmInterface)=>{
        const arrayFilm = getFavoriteFilm();
        const newArrayFilm=arrayFilm.filter(f=>f.id!==film.id)
        localStorage.setItem("films",JSON.stringify(newArrayFilm))
    }

    const getSearchContext=()=>{
        return JSON.parse(localStorage.getItem("searchContext")||"{}")
    }

    const setSearchContext=(searchObject:searchContext)=>{
        localStorage.setItem("searchContext",JSON.stringify(searchObject))
    }

    return {
            getFavoriteFilm,
            setFavoriteFilm,
            getDetailsFilm,
            setDetailsFilms,
            removeFilm,
            getSearchContext,
            setSearchContext
        }
}