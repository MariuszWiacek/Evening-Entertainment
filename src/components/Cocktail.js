import React from "react";
import axios from "axios";

const requestURL = "https://api.api-ninjas.com/v1/cocktail?name=bloody mary";

const requestURLconfig = {
  headers: {
    "X-Api-Key": "cXvJnqSjufVvS4Kugere9Q==K1wuKZ3FwBAdm2os",
  },
};

let name, instructions;

function Cocktail() {
  axios.get(requestURL, requestURLconfig).then(function (response) {
    // handle success
    // console.log(response["data"][0]);
    name = response["data"][0].name;
    instructions = response["data"][0].instructions;
    console.log(name);
    console
      .log(instructions)

      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });
  return (
    <div>
      <p>Cocktail</p>
    </div>
  );
}

export default Cocktail;
