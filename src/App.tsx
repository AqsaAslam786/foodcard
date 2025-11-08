import "./App.css";
import ListCard from "./components/FoodMenu";
import { type FoodMenuType } from "./Types/FoodMenuType";

function App() {
  const Card: FoodMenuType = {
    image: "https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png",
    title: "Value Bucket",
    descripton: "Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50",
    price: 2050,
  };
  const Card1: FoodMenuType = {
    image: "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
    title: "Family Festival 3",
    descripton: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy",
    price: 2590,
  };

  const Card2: FoodMenuType = {
    image: "https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png",
    title: "Xtreme Duo Box",
    descripton:"The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1",
    price: 1560,
  };

  const Card3: FoodMenuType = {
    image:"https://www.kfcpakistan.com/images/4d334d30-7324-11f0-b22b-41b1303a1fa3-CrispyDuoBoxcopy-2025-08-07002019.png",
    title: "Crispy Duo Box",
    descripton:"Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
    price: 1350,
  };

  return (
    <>
      <div className="flex gap-2">
        <ListCard food={Card} />
        <ListCard food={Card1} />
        <ListCard food={Card2} />
        <ListCard food={Card3} />
      </div>
    </>
  );
}

export default App;
