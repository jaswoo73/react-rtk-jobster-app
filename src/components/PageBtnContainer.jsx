import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    dispatch(changePage(page + 1));
  };
  const prevPage = () => {
    dispatch(changePage(page - 1));
  };
  return (
    <Wrapper>
      <button
        type="button"
        className="prev-btn"
        onClick={prevPage}
        disabled={page === 1}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={`pageBtn ${pageNumber === page && "active"}`}
              onClick={() => {
                dispatch(changePage(pageNumber));
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="next-btn"
        onClick={nextPage}
        disabled={page === numOfPages}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
