import React, { useState } from "react";
import axios from "axios";
import './Cocktail.css'


const requestURL = "https://api.api-ninjas.com/v1/cocktail?name=bloody mary";

const requestURLconfig = {
  headers: {
    "X-Api-Key": "cXvJnqSjufVvS4Kugere9Q==K1wuKZ3FwBAdm2os",
  },
};

let name, instructions;

function Cocktail() {
  const [cocktail, setCocktail] = useState("");
  const [instructions, setInstructions] = useState("");
  axios.get(requestURL, requestURLconfig).then(function (response) {
    // handle success
    // console.log(response["data"][0]);
    const name = response["data"][0].name;
    const instr = response["data"][0].instructions;
    console.log(name);
    console.log(instr)
    setCocktail(name)
    setInstructions(instr)
  });
  return (
    <div>
      <p className="cocktail-name">Cocktail: {cocktail}</p>
      <p className="cocktail-instructions">Instructions: {instructions}</p>
      <p></p>
    </div>
  );
}

export default Cocktail;
