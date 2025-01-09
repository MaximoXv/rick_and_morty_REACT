import ReactPaginate from "react-paginate";

interface PaginationProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: Record<string, any>;
}

const Pagination = ({ setPageNumber, pageNumber, info }: PaginationProps) => {
  return (
    <ReactPaginate
      className="flex justify-center items-center gap-2"
      forcePage={pageNumber == 1 ? 0 : pageNumber - 1}
      pageCount={info.pages}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="border-2 bg-blue-500 border-blue-500 text-blue-200 px-4 py-1 rounded-md"
      previousClassName="border-2 bg-blue-500 border-blue-500 text-blue-200 px-4 py-1 rounded-md"
      pageClassName="border-2 bg-blue-200 border-blue-500 text-blue-500 px-4 py-1 rounded-md"
      pageLinkClassName=""
      activeClassName="border-2 bg-blue-500 border-blue-500 text-blue-200 px-4 py-1 rounded-md"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
