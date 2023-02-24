import React,{useState, useEffect} from "react";
import { nature_list } from "../json/natureList";
import Natures from "../pages/NaturePage";
import PaginationTemplate from "../shared/PaginationTemplate";

function Nature() {

 const [currentNatures,setCurrentNature] = useState(null);
 const pull_data = (data) => {
    setCurrentNature(data);
  }
    return (
        <>
        <PaginationTemplate list={nature_list} number="6" items={pull_data} quote="Nature always wears the colors of the spirit."/>
        {currentNatures!=null &&  <Natures items={currentNatures}/>}
        </>

    );
}

export default Nature;
