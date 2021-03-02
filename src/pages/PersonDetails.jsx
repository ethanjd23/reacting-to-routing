import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersonDetails = () => {
  const { personid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`) // fetching people
      .then((res) => res.json())
      .then((res) => setPerson(res));
  }, []);

  return (
    <div className="ml-5">
      <h4>Name: {person?.name}</h4>
      <p>Age: {person?.age}</p>
      <p>Gender: {person?.gender}</p>
      <p>Hair Color: {person?.hair_color}</p>
      <p>Eye Color: {person?.eye_color}</p>
    </div>
  );
};

export default PersonDetails;
