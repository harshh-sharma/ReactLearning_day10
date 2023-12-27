import { LOGO_URL, RestaurantImg } from "../../utils/constants";

const Card = (props) => {
  console.log("Prop",props)
  const { name, cuisines, sla, avgRating, cloudinaryImageId } =
    props.restaurantData.data;
    let filterCuisines = [];
  for(i = 0 ; i < 3 ; i++){
    filterCuisines.push(cuisines[i])
  }
  return (
    <div id="cardContainer">
      <img src={RestaurantImg + cloudinaryImageId} />
      <div id="bottom-section">
        <div id="heading">{name}</div>
        <p>
          {filterCuisines.join(',')}
        </p>
        <div className="inner-card-container">
          <span> {avgRating}</span>
          <span>{sla.deliveryTime} mins</span>
          <span>400 For Two</span>
        </div>
      </div>
    </div>
  );
};

// Higher order component 
export const withPromotedLabel = (Card) => {
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
         <Card {...props}/>
      </div>
    );
  }
}

export default Card;
