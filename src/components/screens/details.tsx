import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useLocalStorage } from "../localStorageCenter";
import { FilmInterface } from "./Film";

const Details = () => {
  const { getDetailsFilm } = useLocalStorage();
  const [film, setFilm] = useState<FilmInterface>();

  useEffect(() => {
    setFilm(getDetailsFilm());
  }, []);

  if (!film)
    return (
      <div className="spinContainer ">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );

  const filmPath: string = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
  return (
    <div className="container mt-5">
      <div className="col-12">
        <img
          src={filmPath}
          className="img-fluid mx-auto d-block"
          alt="film.poster_path"
        />
      </div>
      <div className="bodyCard col-12 text-center">
        <h5 className="cardTitle">{film.title}</h5>
        <p>
          <span className="infoDate"> Date de sortie:</span>
          <span className="dateCard"> {film.release_date}</span>
        </p>
        <p>{film.overview}</p>
      </div>
    </div>
  );
};
export default Details;
