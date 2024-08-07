import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const { name, cuisines } = resMenu?.cards[2]?.card?.card?.info || {};
  const menuList =
    resMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(menuList);

  if (resMenu === null) {
    return <Shimmer />;
  }
  return (
    <div className="text-center">
      <h1>Menu</h1>
      <p>{name}</p>
      <p className="cuisine">{cuisines.join(", ")}</p>
      {menuList.map((list) => (
        <Accordian itemCards={list?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
