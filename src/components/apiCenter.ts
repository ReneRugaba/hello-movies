import axios, { AxiosResponse } from 'axios';
import { initValuesForm } from './screens/searchFilmForm';







const  BASE_URL_API_RECIPES = "https://api.themoviedb.org/3/"

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzgwYzA4MTRjMTRmMDU3MDNkMzcyMTQ0YWY2OTJjMyIsInN1YiI6IjYwMmU2ZmQ4NTVjMWY0MDAzZjA1ZTc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y5h-xKSkxqWeDLxMPJmIMItIcSjsaz4uOx4u3K3ZzsI"



export const useMovies=()=>{
   


    const GetAllDatas = async (page:number=1):Promise<AxiosResponse<any, any> | undefined> =>{
        try {
            return await axios.get(`${BASE_URL_API_RECIPES}discover/movie`,{
                
                headers:{
                    'Authorization':API_KEY
                },
                params:{
                    page:page
                }
            })
        } catch (error) {
            console.log("Error at #GetAllDatas()",error)
        }
      
    }

    const searchDatasBykeysWords=async (objectSearch:initValuesForm,page:number=1):Promise<AxiosResponse<any,any>| undefined>=>{
        try {
            return await axios.get(`${BASE_URL_API_RECIPES}search/movie`,{
                params:{
                    language:objectSearch?.query||"en-US",
                    query:objectSearch?.title||"a" ,
                    page:page
                },
                headers:{
                    'Authorization':API_KEY
                }
            })
            
        } catch (error) {
            console.log("Error at #searchDatasBykeysWords()",error)
        }
    }



   

    return {
            GetAllDatas,
            searchDatasBykeysWords
        }
}
