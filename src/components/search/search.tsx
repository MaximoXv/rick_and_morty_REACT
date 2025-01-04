import { useState } from "react";

interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({setSearch}: SearchProps) => {
    const [inputValue, setInputValue] = useState("")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setInputValue(value)
    }

    const searchCharacter = ()=>{
        setSearch(inputValue);
        
    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        searchCharacter();
    }

  return (
    <form className="flex justify-center gap-4 mb-8" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for characters" className="w-2/5 border-2 border-blue-500 rounded-md focus:outline-none px-2 py-1 shadow-xl" value={inputValue} onChange={handleChange}/>
        <button className="border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md text-lg shadow-xl">Search</button>
    </form>
  )
}

export default Search