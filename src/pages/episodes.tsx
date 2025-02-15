import { useEffect, useState } from "react"
import Cards, { Character } from "../components/cards/cards";

interface DataApi {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }

const Episodes = () => {

  const [id,setId] = useState(1);
  const [info,setInfo] = useState<DataApi>();
  const [results,setResults] = useState<Character[]>([]);

  let air_date = "";
  let name = "";
  if (info) {
    ({ air_date, name } = info);
  }


  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api);
      const dataApi = await data.json();
      setInfo(dataApi)
      const a = await Promise.all(
        dataApi.characters.map(async(charLink: string)=>{
          const charData = await fetch(charLink);
          return await charData.json();
        })
      )
      setResults(a)
    })()
  },[api])
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-center">
          Episode : <span className="text-blue-600">{name === ""?"Unknown":name}</span>
        </h1>
        <h5 className="text-lg text-center">
          Air Date {air_date === ""?"Unknown":air_date}
        </h5>
      </div>
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3">Pick episodes</div>
        <div className="grid gap-2 grid-cols-12 col-span-7">
          <Cards results={results}/>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default Episodes