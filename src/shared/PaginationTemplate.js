import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
function PaginationTemplate(props) {

    const [currentPage, setCurrentPage] = useState(1);

    const [propsPerPage] = useState(props.number);

    const indexOfLastProps = currentPage * propsPerPage;
    const indexOfFirstProps = indexOfLastProps - propsPerPage;

    // Change page
    const paginateFront = () => {
        if (currentPage < (props.list.length / propsPerPage))
            setCurrentPage(currentPage + 1);
    }
    const paginateBack = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }

    useEffect(() => {
        props.items(props.list.slice(indexOfFirstProps, indexOfLastProps));
    }, [currentPage]);

    return (
        <section className="wrap">
            <h2 className="sectionQuotes">
                “{props.quote}“
            </h2>
            <Pagination
                propsPerPage={propsPerPage}
                totalPhotos={props.list.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />
        </section>

    );
}

export default PaginationTemplate;
