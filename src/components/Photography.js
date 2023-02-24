import React, { useState } from "react";
import { photography_list } from "../json/photographyList";
import PaginationTemplate from "../shared/PaginationTemplate";
import Photos from "../pages/PhotoPage";

function Photography() {
    const [currentPhotos, setCurrentPhotos] = useState(null);
    const pull_data = (data) => {
        setCurrentPhotos(data);
    }
    return (
        <>
            <PaginationTemplate list={photography_list} number="6" items={pull_data} quote="Photography is the art of making memories tangible." />
            {currentPhotos != null && <Photos items={currentPhotos} />}
        </>

    );
}

export default Photography;