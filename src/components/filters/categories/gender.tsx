import FilterButton from "../filter-button"

interface GenderProps {
  setGenders: (genders: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Gender = ({ setGenders, setPageNumber }: GenderProps) => {
  const genders = ["male", "female", "genderless", "unknown"];
  return (
    <div className="flex flex-col gap-1 p-2 border-2 border-blue-500 rounded-md w-full">
      <details className="" >
    <summary className="">
      Gender
    </summary>
    <div className=" flex flex-wrap gap-2 p-2 w-full mt-2">
        {genders.map((gender) => (
          <FilterButton task={setGenders} setPageNumber={setPageNumber} key={gender} id={`genders-${gender}`} name="gender" label={gender} />
        ))}

    </div>
  
  </details>
    </div>
  )
}

export default Gender