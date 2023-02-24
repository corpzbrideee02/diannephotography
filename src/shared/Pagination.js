import React from "react";
export default function Pagination({
    photosPerPage,
    totalPhotos,
    paginateFront,
    paginateBack,
    currentPage,
}) {


  return (
    <div className='flex justify-center'>
      {/* <div className='text-sm text-gray-700'>
          Showing <span className='font-medium'>{currentPage * photosPerPage - 10}</span>
          to <span className='font-medium'> {currentPage * photosPerPage} </span>
          of<span className='font-medium'> {totalPhotos} </span>
          results
        </div> */}
      <div className='rounded-md mb-1' aria-label='Pagination'>
          <button onClick={() =>  paginateBack()}  className='px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-teal-500 hover:bg-slate-800'> Previous </button>
          <button  className='px-2 py-2 pl-8 pr-8 border border-gray-300 text-sm font-medium text-teal-500 hover:bg-slate-800' > {currentPage} </button>
          <button onClick={() =>  paginateFront()} className=' px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-teal-500 hover:bg-slate-800' ><span>Next</span></button>
      </div>
    </div>
  );
}