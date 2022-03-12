import React, { useState } from "react";
import style from "./Users.module.css";


let Paginator = (props) => {
    let portionSize = props.portionSize;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={style.navigationBlock}>
            
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PRIVIOUS</button>}

            <div className={style.navigationBlockItems}>
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span className={props.currentPage === page && style.selectedPage || style.pageNumber}
                            key={page}
                            onClick={(e) => { props.onPageChange(page) }}>{page}</span>
                    )
                })
            }
            </div>

            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}

        </div>
    )
}

export default Paginator;