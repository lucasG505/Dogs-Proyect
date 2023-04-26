const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += 1;
    }
    return range;
};

const fetchPageNumbers = (currentPage, totalPages) => { //currentpage 3 total 22
    if(totalPages > 7){
        let startPage = Math.max(2, currentPage - 1); //2
        const endPage = Math.min(totalPages - 1, currentPage + 1); //4
        let pages = range(startPage, endPage);//[2,3,4]
        
        if (endPage === totalPages) startPage = endPage - 2;
        
        const hasLeftSpill = startPage > 2; //false
        const hasRightSpill = (totalPages - endPage) > 1; //true
        const spillOffset = 5 - (pages.length + 1);//1
        
        switch (true) {
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_PAGE];
                break;
            }
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT_PAGE, ...extraPages, ...pages];
                break;
            }
            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
        }
        return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
}

const Pagination = (props) => {
    const { totalRecords, onPageChanged, currentPage, pageLimit } = props;

    const totalPages = Math.ceil(totalRecords / pageLimit);

    if (totalPages === 1) return null;

    const numbersToNavigate = fetchPageNumbers(currentPage, totalPages);

    return (
        <div>
            <ul>

                {numbersToNavigate.map((number) => {
                    if(number===LEFT_PAGE){
                        return (
                            <li
                                key={number}
                                className={currentPage === 2 ? "disabled" : ""}
                                onClick={() => onPageChanged(currentPage-1)}
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </li>
                        )
                    }
                    if(number===RIGHT_PAGE){
                        return (
                            <li
                                key={number}
                                className={currentPage === totalPages-2 ? "disabled" : ""}
                                onClick={() => onPageChanged(currentPage+1)}
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </li>
                        )
                    }

                    return (
                        <li
                            key={number}
                            className={currentPage === number ? "active" : ""}
                            onClick={() => onPageChanged(number)}
                        >
                            <span >{number}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );

}

export default Pagination;