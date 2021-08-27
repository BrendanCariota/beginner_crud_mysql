import React, { useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("0");

  const submitHandler = async () => {
    const user = await axios.post("http://localhost:5000/create", {
      name,
      age,
      country,
      position,
      wage,
    });

    console.log(user);
  };

  return (
    <div className="information">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Country:</label>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <label>Position:</label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label>Wage (annually):</label>
      <input
        type="number"
        value={wage}
        onChange={(e) => setWage(e.target.value)}
      />
      <button onClick={submitHandler}>Add Employee</button>
      <button onClick={submitHandler}>Add Employee</button>
    </div>
  );
};

export default HomeScreen;
