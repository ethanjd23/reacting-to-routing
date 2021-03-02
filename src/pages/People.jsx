import { useState, useEffect } from "react";
import PersonCard from "../components/PersonCard";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people") // fetching people
      .then((res) => res.json())
      .then((res) => setPeople(res));
  }, []);

  return (
    <>
      <h1 className="display-1 bg-success p-3">Studio Ghibli People</h1>
      <div className="row justify-content-center">
        {people.map((person) => (
          <PersonCard person={person} />
        ))}
      </div>
    </>
  );
};

export default People;
