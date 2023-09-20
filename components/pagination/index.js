// import style from "../../styles/Detail.module.css";
// import left from "../../assets/detail/previous.svg";
// import right from "../../assets/detail/next.svg";
// import Image from "next/image";

const Pagination = ({increment, decrement, workerPerPage, totalWorker, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalWorker / workerPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item mx-1">
          <a
            className="page-link rounded text-secondary"
            href="#"
            aria-label="Previous"
            onClick={decrement}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link text-dark me-1">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item mx-1">
          <a
            className="page-link rounded text-secondary"
            href="#"
            aria-label="Next"
            onClick={increment}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;