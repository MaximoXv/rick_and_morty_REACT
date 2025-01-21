
interface FilterButtonProps {
  name: string;
  id: string;
  label: string;
  setPageNumber: (pageNumber: number) => void;
  task: (task: string) => void;
}

const FilterButton = ({ name, id, label, setPageNumber, task }: FilterButtonProps) => {
  
  return (
    <div className="flex flex-wrap p-1">
        <div className="">
            <input onClick={()=>{
              setPageNumber(1);
              task(label)
            }} className="is-dirty peer hidden"  type="radio" name={name} id={id} />
            <label className="peer-[.is-dirty]:peer-checked:bg-blue-500 peer-[.is-dirty]:peer-checked:text-blue-50 box-border border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md transition duration-300 cursor-pointer" htmlFor={id}>{label}</label>
        </div>
    </div>
  )
}

export default FilterButton