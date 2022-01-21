import ReactPaginate from "react-paginate";

interface PaginationMovies {
    handlePageClickSearchByWords: (e: selectItem) => void
    totalPages: number
    currentPage:number

}

export type selectItem = { selected: number; }

const Pagination = (props: PaginationMovies) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            onPageChange={props.handlePageClickSearchByWords}
            pageRangeDisplayed={3}
            pageCount={props.totalPages}
            previousLabel="<"
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={props.currentPage}
        />
    )
}

export default Pagination;