import { useState, useEffect } from "react";

import FilmCard from "../components/FilmCard";

const Films = () => {
  const [films, setFilms] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films") // fetching films
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  return (
    <>
      <h1 className="display-1 bg-success p-3">Studio Ghibli Films</h1>
      <div className="row justify-content-center">
        {films.map((film) => (
          <FilmCard film={film} />
        ))}
      </div>
    </>
  );
};

export default Films;
