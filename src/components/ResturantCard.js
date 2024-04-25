
const ResturantCard = (props) =>{
    const { resData } = props;
    /*const{
        deliveryTime,
    } = resData?.info.sla;*/
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        //deliveryTime,
    } = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" alt ="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
        </div>
    );
};
export default ResturantCard;