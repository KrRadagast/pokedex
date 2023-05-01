// import { useState, useEffect } from "react";
// import Type from "./functions/type";
// export default function App(props) {
//   const [list, setList] = useState([]);
//   let [searchType, setSearchType] = useState([]);

//   function getType() {
//     fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
//       .then((response) => {
//         return response.json();
//       })
//       .then((result) => {
//         //console.log(result);
//         setList(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   getType();
//   return (
//     <div>

//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function App() {
  let [pokemonObj, setPokemonObj] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [name, setName] = useState([]);
  const [inputText, setInputText] = useState("");
  
  useEffect(() => {
    getPokemon();
  }, []);
  const getPokemon = function () {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.pokemon);
        setPokemonObj(data.pokemon);
      })
      .catch((error) => console.error(error));
  };
  //console.log(pokemonObj)
  function handleSubmit(e) {
    e.preventDefault();

    setPokes([...pokes, inputText]);
  }
  const pokemonInfo = pokes.map((poke) => {
    console.log("this is obj" + pokemonObj);
     const foundPoke = pokemonObj.find((pokemonObj) => {
      return pokemonObj.name == poke;
    });
    //check if poke not found

    return {
      typedName: poke,
      pokemon: foundPoke.num,
      pokemon: foundPoke.type,
      pokemon: foundPoke.weakness,
      pokemon: foundPoke.img,
    };
  });

  return (
    <div>
      <h1>Type the name of a poke!</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {pokemonInfo.map((poke) => {
        return (
          <ul id="Card">
            <img src={poke.image} alt="poke Image"></img>
            <li>{poke.typedName}</li>
            <li>{poke.num}</li>
            <li>{poke.type}</li>
            <li>weakness {poke.weakness}</li>
          </ul>
        );
      })}
    </div>
  );
}
