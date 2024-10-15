import './AddToCartButton.css'

function AddToCartButton({productid, order, modifyOrder}){

    // If order not found
    if( order.find( order => order.id === productid ) === undefined ){
        return <AddToCartButton_Unactive productid={productid} modifyOrder={modifyOrder} />;
    }
    else {
        return <AddToCartButton_Active productid={productid} order={order} modifyOrder={modifyOrder}/>;
    }
    
}

function AddToCartButton_Unactive({productid, modifyOrder}){
    return(
        // Increase quantity by 1
        <button className='addToCart' onClick={() => modifyOrder(productid, 1)}>
            <img alt="cart_button" src="/images/icon-add-to-cart.svg"></img>
            <p className='addToCartDescription'>Add to Cart</p>
        </button>
    );
}

function AddToCartButton_Active({productid, order, modifyOrder}){
    const quantity = order.find( (obj) => obj.id === productid ).quantity;
    return(
        <div className='quantityButton'>
            <button className='decrease' onClick={() => {modifyOrder(productid, -1)}}>-</button>
            <p className='quantity'>{quantity}</p>
            <button className='increase' onClick={() => {modifyOrder(productid, 1)}}>+</button>
        </div>
    );
}

export default AddToCartButton;