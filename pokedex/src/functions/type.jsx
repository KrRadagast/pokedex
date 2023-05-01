// import { useState, useEffect } from "react";
// export default function Type(props) {
//   const [list, setList] = useState([]);
//   let [searchType, setSearchType] = useState([]);


//   function getType() {
//     fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
//       .then((response) => {
//         return response.json();
//       })
//       .then((result) => {
//         console.log(result);
//         setList(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   useEffect(() => {
//     //getType();
//   }, []);
// let pokeType=filterpokeType(list, searchType);
// let type = getListOf(list, "type");



//   return (
//     <div>
//         <h1>Pokemon</h1>
//         <form>
//           <div id="form-Group">
//             <label htmlFor="searchType">Filter By Type</label>
//             <select
//               value={searchType}
//               onChange={(e) => setSearchType(e.target.value)}
//             >
//               <option value="">ALL</option>
//               {type.map((type, index) => {
//                 return <option key={type + index} value={type}>
//                     {type}
//                   </option>
//               })}
//             </select>
//           </div>
//         </form>
   
//     <img></img>
//   </div>
 
 

//   );
// }