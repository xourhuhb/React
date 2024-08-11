import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FoodList from "./FoodList";

const Accordian = ({ itemCards, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" p-2 mx-auto cursor-pointer bg-white my-2 rounded-md shadow-lg">
        <div
          className="flex justify-between items-center "
          onClick={handleClick}
        >
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
      </div>
      {showItems ? <FoodList foodData={itemCards.itemCards} /> : ""}
      <div className="bg-slate-200 h-2 shadow-lg rounded-md mx-auto"></div>
    </div>
  );
};
export default Accordian;
