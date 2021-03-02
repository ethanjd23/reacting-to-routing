import { Link } from "react-router-dom";

const FilmCard = (props) => {
  return (
    <div className="col-4" key={props.film.id}>
      <div className="card shadow my-2">
        <div className="card-body">
          <h4 className="card-title">{props.film.title}</h4>
          <p className="card-text">{props.film.description}</p>
          <Link target="null" to={`/films/${props.film.id}`}>
            go to details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
