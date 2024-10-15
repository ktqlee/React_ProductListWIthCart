import { useState } from 'react';
import './App.css';
import DessertsContainer from './DessertsContainer';
import Cart from './Cart';
import ConfirmOrder from './ConfirmOrder';

// Data is fetched in App.js
import data from "./data.json";

function App() {

  // Array of objects storing the product info and quantities user added
  // This order state is used for representing the cart and confirm order pop up
  const [order, setOrder] = useState([]);
  class Product {
    constructor(id){
      this.id = id;
      this.name = data[id].name;
      this.imgPath = data[id].image.thumbnail;
      this.price = data[id].price.toFixed(2);
      this.quantity = 1;
    }
    total(){
      return (this.price * this.quantity).toFixed(2);
    }
  }

  const modifyOrder = (id, num) => {
    let newOrder = [...order];

    const findOrder = obj => {return obj.id === id};

    // Current product's id does not exist in cart order -> Create new Product order
    if( newOrder.find(findOrder) === undefined ){
      newOrder.push(new Product(id));
    }
    else{
      newOrder.find(findOrder).quantity += num;
      // If quantity === 0, remove it from the array
      if( newOrder.find(findOrder).quantity === 0 ){
        newOrder = newOrder.filter( obj => obj.id != id );
      }
    }

    setOrder(newOrder);
  }
  
  const orderTotalPrice = () => {
    if( order.length === 0 ){
      return 0;
    }
    else{
      let total = 0;
      for( let i = 0; i < order.length; i++ ){
        total += Number(order[i].total());
      }
      return total.toFixed(2);
    }
  }

  const [confirmOrder, setConfirmeOrder] = useState(false);

  return(
    
    <div className='App'>
      <div className='MainContent'>
      <DessertsContainer productData={data} order={order} modifyOrder={modifyOrder}/>
      <Cart productData={data} order={order} modifyOrder={modifyOrder} 
      totalPrice={orderTotalPrice()} setConfirmeOrder={setConfirmeOrder} />
      </div>
      {
          confirmOrder? <ConfirmOrder order={order} totalPrice={orderTotalPrice()} /> : <></>
      }
    </div>
  );
}

export default App;
