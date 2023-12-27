import { useEffect, useState } from "react"

const useRestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=109939&catalog_qa=undefined&submitAction=ENTER');
        const response_json = await response.json();
        const data = response_json.data;
        setResInfo(data);
    }
    useEffect(() => {
        fetchData();
    },[])

    return resInfo ;
}

export default useRestaurantMenu ;