
interface ButtonProps {
    isInFavorite:boolean
    addFilmInLocalStorage:()=>void
}

const ButtonMovies = (props:ButtonProps):JSX.Element => {
  return (
      <button onClick={props.addFilmInLocalStorage} className={props.isInFavorite?"btn btn-danger":"btn btn-primary"}>{props.isInFavorite?"Supprimer":"Favoris"}</button>
  );
};

export default ButtonMovies;
