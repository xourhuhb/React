const FoodList = ({ foodData }) => {
  return (
    <div>
      {foodData.map((lst) => (
        <div className="text-start">
          <li className="list-none">{lst.card.info.name}</li>
        </div>
      ))}
    </div>
  );
};
export default FoodList;
