// import { useState, useEffect } from "react";

// export default function Pokemon() {
//   let [pokemonObj, setPokemonObj] = useState([]);
//   const [poke, setPoke] = useState([]);
//   const [name, setName] = useState([]);
//   const [inputText, setInputText] = useState("");
//   useEffect(() => {
//     getHero();
//   }, []);
//   const getHero= function() {
//     // const[item, setItem]=UseState({});
//     // const {id }=useParams();

//     try {
//         fetch(
//         `https://akabab.github.io/superhero-api/api/all.json`
//       ).then((response)=>{
//         return response.json();
//       }).then((result)=>{ 
//         setPokemonObj(result);
//       })
      
      
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log(pokemonObj)
//   function handleSubmit(e) {
//     e.preventDefault();
    
//     setPoke([...poke, inputText]);
//   }
//   const pokemonInfo = poke.map((poke) => {
//     console.log(pokemonObj)
//     const foundPoke = pokemonObj.find((pokemonObj) => {

//         return pokemonObj.name == poke;

//     });
//     //check if poke not found
   
//       return{
//       typedName:poke,
//       pokemon:foundPoke.num,
//       pokemon:foundPoke.type,
//       pokemon:foundPoke.weakness,
//       pokemon:foundPoke.img
//     }
    
//   });

// return (
//     <div>
//       <h1>Type the name of a poke!</h1>
//       <form onSubmit={handleSubmit} action="">
//         <input type="text" value={inputText}onChange={(e)=>{
//           setInputText(e.target.value)
//         }} />
//         <button type="submit">Submit</button>
//       </form>
//       {pokemonInfo.map((poke) => {
//         return (
//         <ul id="Card">
//             <img src={poke.image} alt="poke Image"></img>
//             <li>{poke.typedName}</li>
//             <li>{poke.num}</li>
//             <li>{poke.type}</li>
//             <li>weakness {poke.weakness}</li>
            
//             </ul>);
            
//       })}
//     </div>

//   )};