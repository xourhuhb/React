import { IMAGE_CDN, RATING } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="card">
      <img className="food-pic" src={IMAGE_CDN + cloudinaryImageId} />
      <p className="resto-name">{name}</p>
      <div className="delivery-time">
        <p className="rating-points">
          <img className="rating" src={RATING} />
          {avgRating}
        </p>
        <p className="delivery">{slaString}</p>
      </div>
      <p className="cusine">{cuisines.join(",")}</p>
    </div>
  );
};
export default RestaurentCard;
