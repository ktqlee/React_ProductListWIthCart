import React from "react";
import './ConfirmOrder.css';

function ConfirmOrder({order, totalPrice}){
    return (
        <div className="ConfirmOrderBackground">
            <div className="ConfirmOrderContainer">
                <img src="images/icon-order-confirmed.svg" alt="Order_Comfirm_Icon" className="OrderComfirmIcon"></img>
                <h1>Order Confirmed</h1>
                <p className="EnjoyP">We hope you enjoy your food!</p>

                <SubItems_Container order={order} totalPrice={totalPrice} />

                <button className="StartNewOrderButton" onClick={ () => window.location.reload()}>
                    Start New Order
                </button>
            </div>
        </div>
    );
}

function SubItems_Container({order, totalPrice}){
    return(
        <div className="SubItems_Container">
        {
            order.map( (obj, index) => {
                return(
                    <SubItem key={index} image={obj.imgPath} 
                        name={obj.name} quantity={obj.quantity} price={obj.price} total={obj.total()}
                    />
                )
            } )
        }
        <div className="OrderTotalContainer">
                    <label>Order Total</label>
                    <label className="TotalPriceFigure">${totalPrice}</label>
                </div>
        </div>
    );
}

function SubItem({image, name, quantity, price, total}){
    return(
        <div className="ConfirmOrderSubItem">
            <div className="ImageWithTextContainer">
                <img src={image} alt="Product_Image" className="ConfirmOrderProductImage"></img>
                <div className='ConfirmOrderProductInfo'>
                    <p className='ConfirmOrderProductName'>{name}</p>
                    <p className='ConfirmOrderProductQuantity'>{quantity}x</p>
                    <p className='ConfirmOrderProductPrice'>@${price}</p>
                </div>
            </div>
            <p className='ConfirmOrderProductTotalPrice'>${total}</p>
        </div>
    );
}

export default ConfirmOrder;