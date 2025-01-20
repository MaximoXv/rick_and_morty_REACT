
interface FilterButtonProps {
  name: string;
  id: string;
  label: string;
  value: string;
}

const FilterButton = ({ name, id, label, value }: FilterButtonProps) => {
  return (
    <div className="flex flex-wrap p-1">
        <div className="">
            <input className="is-dirty peer hidden"  type="checkbox" name={name} id={id} value={value} />
            <label className="peer-[.is-dirty]:peer-checked:bg-blue-500 peer-[.is-dirty]:peer-checked:text-blue-50 box-border border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md transition duration-300 cursor-pointer" htmlFor={id}>{label}</label>
        </div>
    </div>
  )
}

export default FilterButton