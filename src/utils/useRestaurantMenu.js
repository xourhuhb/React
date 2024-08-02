import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();

    setResMenu(json.data);
  };
  return resMenu;
};
export default useRestaurantMenu;
