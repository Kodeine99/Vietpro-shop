import React from "react";
import queryString from "query-string";
import { Link, useLocation } from 'react-router-dom';

export default function Pagination({pages}) {
  const { totalDocuments, limit } = pages;
  
  const totalPage = Math.ceil(totalDocuments / limit);

  const location = useLocation(); //hook lay key path
  const pathname = location.pathname;
  const search = queryString.parse(location.search);
  const page = parseInt(search.page) || 1;

  // Ham tra ve url cua search input.
  function makeUrl(page) {
    return `${pathname}?${queryString.stringify({ ...search, page: page })}`;
  }

  function renderPagination() {
    const pages = [];
    const pagesWithDot = [];
    const left = page - 2;
    const right = page + 2;

    for (let i = 1; i <= totalPage; i++) {
      if (i === 1 || i === totalPage || (i >= left && i <= right)) {
        pages.push(i);
      }
    }

    let i = 0;
    while (i < pages.length) {
      pagesWithDot.push(pages[i]);
      if (pages[i + 1] - pages[i] > 1) {
        pagesWithDot.push("...");
      }

      ++i;
    }
    return (
      pagesWithDot.map((i, index) => (
      <li key={index} className={`page-item ${page === i ? "active" : null}`} >
        <Link className="page-link" to={makeUrl(i)}>
          {i}
        </Link>
      </li>
      ))
    )
  }


  return (
    <ul className="pagination">
      <li className={`page-item ${page === 1 ? "disabled": null }`}>
        <Link
          className="page-link"
          to={makeUrl(page - 1)}
        >
          Trang trước
        </Link>
      </li>
      {renderPagination()}
      <li className={`page-item ${page === totalPage ? "disabled": null }`}>
        <Link
          className="page-link"
          to={makeUrl(page+ 1)}
        >
          Trang sau
        </Link>
      </li>
    </ul> 
  )
}
