interface FoodManuePropos{
    image:string,
    title:string,
    description:string,
    price:number,
    order:string;

}

const FoodManue = ({image,title,description,price,order}: FoodManuePropos) => {
  return (
    <div>
          <div className="bg-white w-80 h-110 shadow rounded-2xl items-center">
            <img className="w-60 h-60" src={image} alt="image not found " />
            <h1 className="font-bold">{title}</h1>
            <p className="text-left">{description}</p>
            <h1 className="font-bold">Rs.{price}</h1>
            <button className="bg-red-700 w-50 h-10 font-bold text-white border rounded-2xl mt-8">{order}</button>
          </div>

    </div>
  )
}

export default FoodManue
