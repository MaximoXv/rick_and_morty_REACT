import { useEffect, useState } from "react"
import Cards from "./components/cards/cards"
import Filters from "./components/filters/filters"

function App() {
  const [pageNumber,setPageNumber] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api);
      const datajson = await data.json();
      console.log(datajson);
    })();
  },[api]);


  return (
    <div>
      <h1 className="text-center font-extrabold my-3 text-2xl">Rick & Morty</h1>
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3 bg-red-300">
          <Filters/>
        </div>
        <div className="grid gap-2 grid-cols-12 col-span-7">
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default App
