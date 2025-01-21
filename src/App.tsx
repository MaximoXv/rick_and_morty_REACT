/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import Cards, { Character } from "./components/cards/cards";
import Filters from "./components/filters/filters";
import Pagination from "./components/pagination/pagination";
import Search from "./components/search/search";

interface DataApi {
  info: Record<string, any>;
  results: Character[];
}

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [genders, setGenders] = useState("");
  const [fetchedData, setFetchedData] = useState<DataApi>();

  let info = {} as Record<string, any>;
  let results = [] as Character[];
  if (fetchedData) {
    ({ info, results } = fetchedData);
  }

  console.log(results);
  console.log(info);

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${genders}&species=${species}`;
  

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const dataJson = await data.json();
      setFetchedData(dataJson);
    })();
  }, [api]);

  return (
    <div>
      <h1 className="text-center font-semibold my-3 text-2xl">
        Rick & Morty <span className="font-extrabold">WiKi</span>
      </h1>
      <Search setSearch={setSearch} />
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-1"></div>

        <Filters setStatus={setStatus} setSpecies={setSpecies} setGenders={setGenders} setPageNumber={setPageNumber} />
        <div className="grid gap-2 grid-cols-12 col-span-7">
          <Cards results={results} />
        </div>
        <div className="col-span-1"></div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
