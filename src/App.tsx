/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import Cards, { Character } from "./components/cards/cards"
import Filters from "./components/filters/filters"

interface DataApi {
  info: Record<string , any>;
  results: Character[];
}

function App() {
  const [pageNumber] = useState<number>(1);
  const [fetchedData, setFetchedData] = useState<DataApi | undefined>(undefined);
  
  let info, results;
  if(fetchedData){
    ({info, results} = fetchedData);
  }

  console.log(results);
  console.log(info);
  

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api);
      const dataJson = await data.json();
      setFetchedData(dataJson)
    })();
  },[api]);


  return (
    <div>
      <h1 className="text-center font-semibold my-3 text-2xl">Rick & Morty <span className="font-extrabold">WiKi</span></h1>
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3 bg-red-300">
          <Filters/>
        </div>
        <div className="grid gap-2 grid-cols-12 col-span-7">
          <Cards results={results}/>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default App
