import './Pagination.css';
function Pagination({pageNumber, nextPageFn, previousPageFn}){
    return(
    <div className="pagination">
        <div className="prev" onClick={previousPageFn}>prev</div>
        <div className="page-no">{pageNumber}</div>
        <div className="next" onClick={nextPageFn}>next</div>
    </div>
    );
}

export default Pagination;