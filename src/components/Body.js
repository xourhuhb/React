import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ALL_RESTAURANTS } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchResto, setSearchresto] = useState("");
  const [filteredRestoList, setFilteredRestoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(ALL_RESTAURANTS);
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

  console.log(restoList);
  const status = useOnlineStatus();
  if (status === false) {
    return <h2>Check your internet</h2>;
  }

  if (restoList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="w-full">
      <div className="search-filter">
        <input
          className="box-content p-1 mt-2 w-72"
          type="text"
          value={searchResto}
          onChange={(e) => setSearchresto(e.target.value)}
          placeholder="Search for restaruants and foods"
        />
        <button data-testid="search" className="h-4 w-4" onClick={handleSearch}>
          {/* <FontAwesomeIcon icon={faSearch} /> */} Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-evenly p-5">
        {filteredRestoList.map((val) => (
          <Link to={"/restaurants/" + val.info.id}>
            <RestaurentCard key={val.info.id} resData={val} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
