import React, { useState } from "react";
import { travel_list } from "../json/travelList";
import Travels from "../pages/TravelPage";
import PaginationTemplate from "../shared/PaginationTemplate";

function Travel() {

    const [currentTravels, setCurrentTravels] = useState(null);
    const pull_data = (data) => {
        setCurrentTravels(data);
    }

    return (
        <>
            <PaginationTemplate list={travel_list} number="6" items={pull_data} quote="The more you wander, the more you wonder!" />
            {currentTravels != null && <Travels items={currentTravels} />}
        </>
    );
}

export default Travel;
