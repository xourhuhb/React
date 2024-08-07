import { IMAGE_CDN, RATING } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;
  // const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;

  // console.log(header)
  return (
    <div className=" relative w-48 h-3/6 p-2 rounded-lg  transition-transform duration-200 hover:scale-95 cursor-pointer overflow-hidden">
     {/* {header && subHeader && (
        <div className="absolute mt-44 w-full text-lg truncate text-white font-bold bg-opacity-50 p-1 rounded">
          {header} {subHeader}
        </div>
      )} */}
      <img
        className="w-full h-3/6 object-fill rounded-xl shadow-md border-inherit"
        src={IMAGE_CDN + cloudinaryImageId}
      />
      <p className="font-medium truncate">{name}</p>
      <div className="flex flex-nowrap mt-2 items-center">
        <p className="flex flex-nowrap items-center font-normal">
          <img className="w-4 h-4 rounded-full mr-1" src={RATING} />
          {avgRating}
        </p>
        <p className="ml-1">{slaString}</p>
      </div>
      <p className="font-sans mt-2 text-sm truncate font-normal">
        {cuisines.join(",")}
      </p>

    </div>
  );
};
export default RestaurentCard;
