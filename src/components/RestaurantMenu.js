import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const { name, cuisines } = resMenu?.cards[2]?.card?.card?.info || {};
  if (resMenu === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>Menu</h1>
      <p>{name}</p>
      <p className="cuisine">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantMenu;
