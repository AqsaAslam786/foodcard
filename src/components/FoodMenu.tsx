import { useState } from "react";
import type { FoodMenuType } from "../Types/FoodMenuType";

interface FoodMenuProps {
  food: FoodMenuType;
}

const ListCard = ({ food }: FoodMenuProps) => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="bg-white w-80 h-110 shadow rounded-2xl items-center mt-20">
        <img className="w-60 h-60" src={food.image} alt="image not found " />
        <h1 className="font-bold text-left">{food.title}</h1>
        <p className="text-left">{food.descripton}</p>
        <h1 className="font-bold text-left">Rs.{food.price}</h1>
        <button
          onClick={handleCount}
          className="bg-red-700 w-50 h-10 font-bold text-white border rounded-2xl mt-20"
        >
          +ADD TO BUCKET
        </button>
        <input
          onChange={(e) => setCount(Number(e.target.value))}
          type="text"
          value={count}
          className="border"
        />
      </div>
    </div>
  );
};

export default ListCard;
