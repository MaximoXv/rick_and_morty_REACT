import Gender from "./categories/gender";
import Species from "./categories/species";
import Status from "./categories/status";

interface FiltersProps {
  setStatus: (status: string) => void;
  setPageNumber: (pageNumber: number) => void;
  setGenders: (genders: string) => void;
  setSpecies: (species: string) => void;
}

const Filters = ({ setStatus, setPageNumber, setGenders, setSpecies }: FiltersProps) => {

  const clearFilters = () => {
    setStatus("");
    setGenders("");
    setSpecies("");
    window.location.reload();
  }

  return (
    <div className="col-span-3">
      <h2 className="text-center text-lg font-bold mb-2">Filters</h2>
      <h3 onClick={clearFilters} className="text-center text-blue-400 underline cursor-pointer">Clear filters</h3>

      <div>
        <Gender setGenders={setGenders} setPageNumber={setPageNumber}/>
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
      </div>

    </div>
  );
};

export default Filters;
