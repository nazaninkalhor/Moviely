"use client";
import { useRouter } from "next/navigation";

const PaginatedSeries = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-red-200 rounded disabled:opacity-50 text-red-900"
      >
        Prev
      </button>

      <span className="px-4 py-1 font-bold">
        <span className="text-red-400 text-lg">{currentPage}</span>{" "}
        {currentPage + 1} {currentPage + 2} ... {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-red-200 rounded disabled:opacity-50 text-red-900"
      >
        Next
      </button>
    </div>
  );
};

export default PaginatedSeries;
