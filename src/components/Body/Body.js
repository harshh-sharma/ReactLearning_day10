import Card from "./Card";
import restaurantData from "../../utils/mockData";
import { useState } from "react";
import { withPromotedLabel } from "./Card";


const Body = () => {
    let [listOfRestaurants,setListOfRestaurants]  = useState(restaurantData);
    // console.log(listOfRestaurants)
    let temp  = restaurantData ;
    const [featureButton , setFeatureButton] = useState('Top Rated Restaurants');
    const [searchValue , setSearchValue] = useState('');

    const filterHandler = () => {
        if (featureButton === "Top Rated Restaurants") {
          listOfRestaurants = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurants(listOfRestaurants);
          setFeatureButton("All Restaurants");
        } else {
          setListOfRestaurants(temp);
          setFeatureButton("Top Rated Restaurants");
        }
      }

     const PromotedRestaurant = withPromotedLabel(Card);
      
    return (
        <div id='container'>
            <div id="top-section">
                <div id="search-container">
                    <input type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value) }
                     placeholder="Enter your query" />
                    <button onClick={(e) => {
                      let filterRestaurants = temp.filter(res => res.data.name.toLowerCase().includes(searchValue.toLowerCase()));
                       setListOfRestaurants(filterRestaurants);
                      setSearchValue('');
                    }}>Search</button>
                </div>
                <button onClick={filterHandler}>{featureButton}</button>
            </div>
            <div id='restaurant-container'>
                {
                  listOfRestaurants.length > 0 ? listOfRestaurants.map((restaurant) =>   restaurant.data.promoted ? <PromotedRestaurant key = {restaurant.data.id} restaurantData = {restaurant} /> : <Card key = {restaurant.data.id} restaurantData = {restaurant} />) : <h1>Search not found</h1>
                }
            </div>
        </div>
    );
}

export default Body ;