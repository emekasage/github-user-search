import React from "react";

export default function Pagination({ page, setPage, items, perPage }) {
  return (
    <div className="pagination">
      {items.length > 0 && (
        <div>
          {page > 0 && (
            <div onClick={() => setPage(0)} className="page_btn">
              FirstPage
            </div>
          )}
          {page > 0 && (
            <div onClick={() => setPage(page - 1)} className="page_btn">
              Previous
            </div>
          )}
          {[...Array(Math.ceil(items.length / perPage))].map((x, i) => {
            return (
              <div
                div
                key={i}
                onClick={() => setPage(i)}
                className={`page_btn ${page === i ? "active" : ""}`}
              >
                {i + 1}
              </div>
            );
          })}
          {page < Math.ceil(items.length / perPage) && (
            <div onClick={() => setPage(page + 1)} className="page_btn">
              Next
            </div>
          )}

          {page < Math.ceil(items.length / perPage) && (
            <div
              onClick={() => setPage(Math.ceil(items.length / perPage) - 1)}
              className="page_btn"
            >
              LastPage
            </div>
          )}
        </div>
      )}
    </div>
  );
}
