import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FoodList from "./FoodList";
import { useState } from "react";

const Accordian = ({ itemCards }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className=" p-2 mx-auto cursor-pointer  w-7/12 bg-slate-50 my-2 rounded-md shadow-lg">
      <div className="flex justify-between items-center " onClick={handleClick}>
        <div>
          <span className="font-semibold">
            {itemCards.title} ({itemCards.itemCards.length})
          </span>
        </div>
        {showItems ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {showItems && <FoodList foodData={itemCards.itemCards} />}
    </div>
  );
};
export default Accordian;
