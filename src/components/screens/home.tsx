import {useEffect, useState} from 'react'
import { useMovies } from '../apiCenter';
import { searchContext, useLocalStorage } from '../localStorageCenter';
import Film, { FilmInterface } from './Film';
import Pagination, { selectItem } from './pagination';
import SearchFilmForm, { initValuesForm } from './searchFilmForm';
import { Spinner } from 'react-bootstrap';




const Home:()=>JSX.Element = ():JSX.Element => {
    
    const {searchDatasBykeysWords} = useMovies()
    const [state,setState] = useState<FilmInterface[]>([])
    const [isLoading,setIsLoading] = useState<Boolean>(true)
    const [totalPages,setTotalPages] = useState<number>(1)
    const [page,setPage]=useState<number>(0)
    const [searchObj,setSearchObj] = useState<initValuesForm>()
    const {getSearchContext,setSearchContext}=useLocalStorage()

    useEffect(()=>{
        let searContext:searchContext=getSearchContext()
        let search:initValuesForm={title:searContext.title,query:searContext.searchWord}
        let page:number=searContext.activePage
        searchDatasBykeysWords(search,page).then(resp=>{
            setState(resp?.data.results);
            setTotalPages(500)
            setIsLoading(false);

      })
    },[state.length])

    if (isLoading) return (<div className='spinContainer '><Spinner animation="grow" variant="danger" size="sm"/><Spinner animation="grow" variant="warning" size="sm" /><Spinner animation="grow" variant="info" size="sm" /></div>)
    
    const searchFilm =(searchobject:initValuesForm)=>{
        setIsLoading(true)
        setSearchObj(searchobject)
        searchDatasBykeysWords(searchobject)
        .then(resp=>{
            setState(resp?.data.results);
            setTotalPages(resp?.data.total_pages)
            let searchContext:searchContext={activePage:1,title:searchObj?.title,searchWord:searchObj?.query}
            setSearchContext(searchContext)
            setIsLoading(false);
        })
    }

    const handlePageClickSearchByWords=(e:selectItem)=>{
        setIsLoading(true)
        let curentPage=e.selected===0?1:e.selected;
        searchDatasBykeysWords(searchObj,(curentPage)).then(resp=>{
            setState(resp?.data.results);
            setTotalPages(resp?.data.total_pages)
            setPage(curentPage)
            setIsLoading(false);
            let searchContext:searchContext={activePage:(e.selected+1),title:searchObj?.title,searchWord:searchObj?.query}
            setSearchContext(searchContext)
        })
    }

   


   
    return (
        <div className='container .container404'>
            <div className="row">
                <div className="col-12">
                    <SearchFilmForm searchFilm={searchFilm}/>
                </div>
            </div>
           <div className='row d-flex justify-content-around'>
                {state?.map((film:FilmInterface,i)=>(<Film film={film} key={i} />))}
           </div>
           <div className='pageContainer'>
               <Pagination currentPage={page}  totalPages={totalPages} handlePageClickSearchByWords={handlePageClickSearchByWords}  />
           </div>
        </div>
    )
};

export default Home;
