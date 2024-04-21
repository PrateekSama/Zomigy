
const ResturantCard = (props) =>{
    const { resData } = props;
    return(
        <div className="res-card">
            <img className="res-logo" alt ="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId}></img>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>{resData.data.deliveryTime}minutes</h4>
        </div>
    );
};
export default ResturantCard;