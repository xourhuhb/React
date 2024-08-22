import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const FoodList = ({ foodData }) => {
  console.log(foodData);

  const dispatch = useDispatch();

  const handleCartItems = (lst) => {
    dispatch(addItem(lst));
  };
  return (
    <div className="bg-white mx-auto">
      {foodData.map((lst) => (
        <>
          <div className="text-start p-3 rounded-md my-2 flex justify-between items-center">
            <div className="w-3/4">
              <li className="list-none font-semibold">{lst.card.info.name}</li>
              <li className="list-none font-semibold">
                ₹
                {lst.card.info.price
                  ? lst.card.info.price / 100
                  : lst.card.info.defaultPrice / 100}
              </li>
              <div className="flex">
                <img src="" />
                <li className="list-none text-sm text-green-600 font-bold">
                  {lst.card.info.ratings.aggregatedRating.rating
                    ? `★ ${lst.card.info.ratings.aggregatedRating.rating}`
                    : ""}
                </li>
                <span className="text-sm">
                  {lst.card.info.ratings.aggregatedRating.ratingCountV2
                    ? `(${lst.card.info.ratings.aggregatedRating.ratingCountV2})`
                    : ""}
                </span>
              </div>
              <li className="list-none line-clamp-2 text-sm">
                {lst.card.info.description}
              </li>
            </div>
            <div className="flex items-end justify-center w-36 h-36">
              <img
                className="rounded-xl w-36 h-32 mb-3"
                src={IMAGE_CDN + lst.card.info.imageId}
              />
              <button
                onClick={() => handleCartItems(lst)}
                className="absolute rounded-md w-24 h-10 bg-white text-green-600 hover:bg-slate-300 font-bold border "
              >
                ADD
              </button>
            </div>
          </div>
          <div className="h-px bg-slate-200"></div>
        </>
      ))}
    </div>
  );
};
export default FoodList;
