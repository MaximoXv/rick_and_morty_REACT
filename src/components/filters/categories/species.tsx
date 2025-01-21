import FilterButton from "../filter-button";

interface SpeciesProps {
  setSpecies: (species: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Species = ({ setSpecies, setPageNumber }: SpeciesProps) => {
  const species = ["Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",];

  return (
    <div className="flex flex-col gap-1 p-2 border-2 border-blue-500 rounded-md w-full">
    <details className="" >
    <summary className="">
      Species
    </summary>
    <div className=" flex flex-wrap gap-2 p-2 w-full mt-2">
        {species.map((specie) => (
          <FilterButton task={setSpecies} setPageNumber={setPageNumber} key={specie} id={`species-${specie}`} name="species" label={specie} />
        ))}

    </div>
    </details>
    </div>
  )
}

export default Species