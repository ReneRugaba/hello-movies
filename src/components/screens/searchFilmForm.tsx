import {ErrorMessage, Field, Form, Formik} from 'formik'
import { useState } from 'react'
import * as yup from 'yup'

interface SearchFilm{
    searchFilm:(searchobject:initValuesForm)=>void
}

export type initValuesForm = {title:string|undefined,query:string|undefined} | undefined

const SearchFilmForm=(props:SearchFilm)=>{

    const [initValues] = useState({
        title:'',
        query:''
    })

    const onSubmit =(value:initValuesForm)=>{
        props.searchFilm(value)
    }
    
    const formScheama = yup.object({
        title:yup.string().required("Champs requis!").matches(/^[aA-zZ\s]+$/,"Seul les charactères alphabétiques sont autorisés!")
    })
    return(
        <Formik 
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={formScheama}
        >
            <Form className='mt-5'>
                <div className="row">
                <div className="form-group col-sm-12 col-md-12 col-lg-8 mb-2 mt-3">
                    <Field type="text" name='title' placeholder='Caractère ou mot de recherche...' className='form-control border border-primary '/>
                    <div className='textMessage'>
                        <ErrorMessage  name='title' />
                    </div>
                </div>
                <div className="form-groupe col-sm-12 col-md-12 col-lg-2 mb-2 mt-3">
                    <Field as='select' name='query'  className='form-control border border-primary text-primary'>
                        <option className='text-Center'>Selectionner la langue</option>
                        <option value='en-US'>Anglais</option>
                        <option value='fr'>Français</option>
                    </Field>
                </div>
                <div  className="col-sm-12 col-md-12 col-lg-2 mt-3">
                    <button className="btn btn-success col-12" type="submit">Soumettre</button>
                </div>
                </div>
            </Form>
        </Formik>
    )
}
export default SearchFilmForm