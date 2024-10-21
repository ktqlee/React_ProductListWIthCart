# Frontend Mentor - Product list with cart

🌐 **Github Page for this project:** [Live Site URL](https://ktqlee.github.io/React_ProductListWIthCart/)

![Design Preview](/doc/cart_preview.png)

React is used in this project.

["Product List With Cart" Challenge From Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)

## Active State
![Active State of Shopping Cart](/doc/cart_activeState.png)

## Confirm Order State
![Confirm Order State](/doc/cart_confirmOrderState.png)

## Design of Shopping Cart

The Shopping Cart was originally designed as an array of integers to store the quantities for each product added by the user. The shopping cart was rendered by looping through this array using .map().

However, it was observed that the sequence of products did not correspond to the order in which they were added, which could lead to confusion for users.

![Cart Sequence According To Product ID](/doc/cart_oldSeq_edit.png)

To address this, the Shopping Cart was redesigned to render products based on the sequence in which they were added. When a user adds a product to the cart, a new Product object is pushed to the order state (an array that stores these objects). As a result, the shopping cart now displays the list of products in the correct time sequence.

```js
// App.js

// Array of objects storing the product info and quantities user added
// This order state is used for representing the cart and confirm order pop up
const [order, setOrder] = useState([]);

class Product {
    constructor(id){
        this.id = id;
        // Other related information about the product...
        this.quantity = 1;
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
        // Increase or decrease quantity by num
        newOrder.find(findOrder).quantity += num;

        // If quantity === 0, remove it from the array
        if( newOrder.find(findOrder).quantity === 0 ){
            newOrder = newOrder.filter( obj => obj.id != id );
        }
    }

    setOrder(newOrder);
  }
```

![New Design of Cart Showing the Correct Sequence](/doc/cart_newSeq_edit.png)