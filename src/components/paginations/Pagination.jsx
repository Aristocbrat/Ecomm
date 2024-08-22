import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNum = [];
  for (let p = 1; p <= Math.ceil(totalPosts / postPerPage); p++) {
    pageNum.push(p);
  }

  return (
    <nav>
      <ul className="paggy flex text-2xl gap-3 font-extrabold justify-center text-white py-4">
        {pageNum.map(number => (
          <li key={number} className='paggy-item bg-[#1f4550] w-10 h-8 rounded-btn hover:scale-110 duration-500 flex justify-center'>
            <a onClick={() => paginate(number)} className='page-link cursor-pointer'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
