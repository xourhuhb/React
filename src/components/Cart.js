import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <p>Cart</p>
      {cartItems.map((item) => (
        // console.log(item.card.info.name);
        <li className="list-none font-semibold text-black">
          {item.card.info.name}
        </li>
      ))}
    </div>
  );
};
export default Cart;
