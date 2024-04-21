import resList from "../utils/mockData";
import ResturantCard from "../ResturantCard";
import {useState} from "react";

const Body = () => {

    const [listOfResturant,setlistOfResturant]= useState(resList);
    return(
        <div className="body">
            <div className="filter">
                
                <button className="filter-btn" onClick={()=>{
                    
                    const filterdList = listOfResturant.filter(
                        (res)=> res.data.avgRating >= 4
                    );
                    setlistOfResturant(filterdList);
                }}
                >Top Rated Resturants</button>
            </div>
            <div className="res-container"> 
            {
                listOfResturant.map((resturant)=>(
                    <ResturantCard key ={resturant.data.id} resData={resturant} />
                ))
            }
            </div>
        </div>
    );
};
export default Body;