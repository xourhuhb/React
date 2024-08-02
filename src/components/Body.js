import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchResto, setSearchresto] = useState("");
  const [filteredRestoList, setFilteredRestoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    let restaurantsList =
      json.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants ||
      [];
    setRestoList(restaurantsList);
    setFilteredRestoList(restaurantsList);
  };

  const handleSearch = () => {
    let filteredRestaurants = restoList.filter(
      (res) =>
        res?.info.name.toLowerCase().includes(searchResto.toLowerCase()) ||
        res?.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchResto.toLowerCase())
    );
    setFilteredRestoList(searchResto !== "" ? filteredRestaurants : restoList);
  };

  const status = useOnlineStatus();
  if (status === false) {
    return <h2>Check your internet</h2>;
  }

  if (restoList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search-filter">
        <input
          className="search-input"
          type="text"
          value={searchResto}
          onChange={(e) => setSearchresto(e.target.value)}
          placeholder="Search for restaruants and foods"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredRestoList.map((val) => (
          <RestaurentCard key={val.info.id} resData={val} />
        ))}
      </div>
    </div>
  );
};

export default Body;
