
import './App.css'
import FoodManue from './components/FoodManue'
 export type FoodCard ={
    image:string,
    title:string,
    description:string,
    price:number,
    order:string;
  }


function App() {
  const Card:FoodCard ={
    image:"https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png",
    title:"Value Bucket",
    description:"Enjoy 9 pcs of our Signature Crispy Fried Chicken, hand-breaded in-house. Rs. 50 from every bucket goes to the Mitao Bhook Foundation.",
    price:2050,
    order:"+ADD TO BUCKET"

  }
 
  return (
    <>
    <div>
      <FoodManue image={Card.image} title={Card.title} description={Card.description} price={Card.price} order={Card.order}/>
    </div>
    </>
  )
}

export default App
