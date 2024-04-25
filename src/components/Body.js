import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfResturant,setlistOfResturant]= useState([]);
    const [searchText,setSearchText]=useState("");
    const [filterdResturant,setFilteredResturant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.92234263547713&lng=77.49347718516967&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setlistOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    };   

    if(listOfResturant==0){
        return <Shimmer />
    };

    
    return(
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={()=>{
                    const filterdResturant=listOfResturant.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                     );
                    setFilteredResturant(filterdResturant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    
                    const filterdList = listOfResturant.filter(
                        (res)=> res.info.avgRating >= 4
                    );
                    setlistOfResturant(filterdList);
                }}
                >Top Rated Resturants</button>
            </div>
            <div className="res-container"> 
            {
                
                filterdResturant.map((restaurant)=>(
                    <ResturantCard key ={restaurant.info.id} resData={restaurant} />
                ))
            }
            </div>
        </div>
    );
};
export default Body;