import Gender from "./categories/gender";
import Species from "./categories/species";
import Status from "./categories/status";

const Filters = () => {
  return (
    <div className="col-span-3">
      <h2 className="text-center text-lg font-bold mb-2">Filters</h2>
      <h3 className="text-center text-blue-400 underline cursor-pointer">Clear filters</h3>
      <div>
        <Gender/>
        <Status/>
        <Species/>
      </div>

    </div>
  );
};

export default Filters;
