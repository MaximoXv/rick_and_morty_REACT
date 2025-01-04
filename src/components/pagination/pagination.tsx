interface PaginationProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
}

const Pagination = ({setPageNumber,pageNumber}: PaginationProps) => {
  
  const prev = ()=>{
    if(pageNumber == 1) return
    setPageNumber((prev)=>prev - 1);
  };
  const next = ()=>{
    if(pageNumber == 20) return
    setPageNumber((prev)=>prev + 1);
  };
  
  return (
    <div className="flex justify-center gap-5">
      <button onClick={prev} className="border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md">Prev</button>
      <button onClick={next} className="border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md">Next</button>
    </div>
  )
}

export default Pagination