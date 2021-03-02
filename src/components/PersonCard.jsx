import React from "react";
import { Link } from "react-router-dom";

const PersonCard = (props) => {
  return (
    <>
      <div className="col-4" key={props.person.id}>
        <div className="card shadow my-2">
          <div className="card-body">
            <h4 className="card-title">{props.person.name}</h4>
            <p className="card-text">
              {props.person.age}, {props.person.gender}
            </p>
            <Link target="null" to={`/people/${props.person.id}`}>
              go to details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
