import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`) // fetching films
      .then((res) => res.json())
      .then((res) => setFilm(res));
  }, []);

  return (
    <>
      <h4>Title: {film?.title}</h4>
      <p>Description: {film?.description}</p>
      <p>Director: {film?.director}</p>
      <p>Producer: {film?.producer}</p>
      <p>Release Date: {film?.release_date}</p>
      <p>Rotten Tomato Score: {film?.rt_score}</p>
    </>
  );
};

export default FilmDetails;
