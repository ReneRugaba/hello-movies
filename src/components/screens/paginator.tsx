import React, { useState } from 'react';

interface PaginatorProps{
    countPage:number
}

interface KonvaTextEventTarget extends EventTarget {
    value: number
}
  
interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
    target: KonvaTextEventTarget
}

function Paginator(props:PaginatorProps) {

    const [pages] = useState(props.countPage);
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage=()=>currentPage>=1 && setCurrentPage((currentPage + 1));

    const goToPreviousPage=()=>currentPage<=pages && setCurrentPage((currentPage - 1));
    
    const changePage=(event:KonvaMouseEvent)=>{
        const pageNumber = Number(event.target.value);
        setCurrentPage(pageNumber);
        
    }
    const getPaginationGroup=()=>{}
    return (
        <div>
            
        </div>
    );
}

export default Paginator;