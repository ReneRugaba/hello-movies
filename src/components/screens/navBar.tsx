import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => {

    const [isInFavoris,setIsInFavoris]=useState<Boolean>(false)

    const gotToFavoris=()=>{
        setIsInFavoris(true)
    }
    const returnHome=()=>{
        setIsInFavoris(false)
    }
  return (
      <nav className='navBar'>
          <Link className='logo' to='/'><h1>HelloMovies</h1></Link>
          <ul>
          {isInFavoris&&(<Link className='link' onClick={returnHome} to="/" >Home</Link>)}
              <Link className='link' onClick={gotToFavoris} to="/favoris">Favoris</Link>
          </ul>
      </nav>
  )
};

export default NavBar;
