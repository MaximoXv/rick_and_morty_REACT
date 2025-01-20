import FilterButton from "../filter-button"

const Gender = () => {
  const genders = ["male", "female", "genderless", "unknown"];
  return (
    <div className="flex flex-col gap-1 p-2 border-2 border-blue-500 rounded-md w-full">
      <details className="" >
    <summary className="">
      Gender
    </summary>
    <div className=" flex flex-wrap gap-2 p-2 w-full mt-2">
        {genders.map((gender) => (
          <FilterButton key={gender} id={`genders-${gender}`} name="gender" label={gender} value={gender} />
        ))}

    </div>
  
  </details>
    </div>
  )
}

export default Gender