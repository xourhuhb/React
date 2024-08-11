import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { useState } from "react";
import { RATING } from "../utils/constants";
import deliveryman from "../assets/deliveryman.png";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState([]);

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const { name, cuisines, avgRating, totalRatingsString, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info || {};

  const expectationNotifiers =
    resMenu?.cards[2]?.card?.card?.info?.expectationNotifiers || [];

  console.log("expectationNotifiers:", expectationNotifiers);
  const menuList =
    resMenu?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const deliveryText =
    expectationNotifiers.length > 0
      ? expectationNotifiers[0]?.text
      : "No notifications";
  console.log(deliveryText);
  if (resMenu === null) {
    return <Shimmer />;
  }
  return (
    <div className="mx-auto w-7/12">
      <p className="text-2xl my-6 mx-auto font-bold">{name}</p>
      <div className=" border rounded-lg p-4 mx-auto text-inherit">
        <div className="flex items-center font-bold">
          <div className="flex items-center">
            <img className="w-4 h-4 rounded-full mr-1" src={RATING} />
            <span>
              {avgRating} ({totalRatingsString})
            </span>
          </div>
          <span className="mx-4">• {costForTwoMessage}</span>
        </div>
        <p className="text-sm font-bold text-orange-600">
          {cuisines.join(", ")}
        </p>
        <div className="h-px bg-slate-300 my-3 w-full"></div>
        <div>
          <img className="w-6 h-6" src={deliveryman} />
          <span>{expectationNotifiers[0]?.text}</span>
        </div>
      </div>
      {menuList.map((list, index) => (
        <Accordian
          itemCards={list?.card?.card}
          showItems={showIndex.includes(index)}
          setShowIndex={() =>
            setShowIndex((prevIndices) =>
              prevIndices.includes(index)
                ? prevIndices.filter((i) => i !== index)
                : [...prevIndices, index]
            )
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
