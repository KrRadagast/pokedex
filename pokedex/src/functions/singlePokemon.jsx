// import {useState,useEffect} from "react"
// import { useParams } from "react-router-dom"
// export default function SingleFilmPage(){
//     const[item, setItem]=useState({});
//     const {id }=useParams();
    
//     function getFilm(){
//     fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((item)=>{
//         setItem(item);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
    
// }
//     useEffect(()=>{
//         getFilm();
//     },[]);
//     return(<div>
//         <div>
//         <img src={`${item.image}`} alt={`${item.title} Poster`} />
//         </div>
//         <div>
//         <h1>{item.title}</h1>
//         <p>
//             Directed by {item.director}. Produced by {item.producer}.
//         </p>
        
//         <h2>Description</h2>
//         <p>{item.description}</p>
//         </div>
//     </div>);
// }

