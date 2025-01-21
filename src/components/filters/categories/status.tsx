
import FilterButton from "../filter-button";

interface StatusProps {
  setStatus: (status: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Status = ({ setStatus, setPageNumber }: StatusProps) => {
  const status = ["alive", "dead", "unknown"];

  return (
    <div className="flex flex-col gap-1 p-2 border-2 border-blue-500 rounded-md w-full">
    <details className="" >
    <summary className="">
      Status
    </summary>
    <div className=" flex flex-wrap gap-2 p-2 w-full mt-2 ">
        {status.map((statu) => (
          <FilterButton task={setStatus} setPageNumber={setPageNumber} key={statu} id={`status-${statu}`} name="status" label={statu} />
        ))}

    </div>
    </details>
    </div>
  )
}

export default Status