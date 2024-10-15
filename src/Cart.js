import './Cart.css'

function Cart({productData, order, modifyOrder, totalPrice, setConfirmeOrder}){

    const totalQuantity = order.reduce( (total, obj) => {return total = total + obj.quantity}, 0);

    return(
        <div className="cartContainer">
            <CartHeader totalQuantity={totalQuantity} />
            { 
                totalQuantity === 0 ?  
                <Cart_Empty /> : 
                <Cart_NonEmpty order={order} modifyOrder={modifyOrder} 
                totalPrice={totalPrice} setConfirmeOrder={setConfirmeOrder} /> 
            }
        </div>
    );
}

function CartHeader({totalQuantity}){
    return <h2 className='yourCart'>Your Cart({totalQuantity})</h2>;
}

function Cart_Empty(){
    return(
        <div className='Cart_Empty'>
            <img src='/images/illustration-empty-cart.svg' alt='EmptyCartIllsutration' className='emptyCartImg'></img>
            <p className='cartEmptyMessage'>Your added items will appear here</p>
        </div>
    ); 
}

function Cart_NonEmpty({order, modifyOrder, totalPrice, setConfirmeOrder}){

    return(
        <div className="Cart_NonEmpty"> 
            
            <Cart_SubItems_Container order={order} modifyOrder={modifyOrder} /> 
            
            <div className='CartOrderTotalContainer'>
                <label>Order Total</label>
                <label className='totalPrice'>${totalPrice}</label>
            </div>

            <div className='CarbonNeutralDelivery'>
                <img src='/images/icon-carbon-neutral.svg' alt='CarbonNeutralIcon'></img>
                <label>This is a <b>carbon-neutral</b> delivery</label>
            </div>

            <button className='ConfirmOrderButton' onClick={()=>setConfirmeOrder(true)}>
                Confirm Order
            </button>
        </div>
    );
}

function Cart_SubItems_Container({order, modifyOrder}){

    return(
        <div className='Cart_SubItems_Container'>
            {   
                order.map( (obj, index) => {
                    
                    return(
                        <Cart_SubItem 
                            key={index} index={obj.id} 
                            name={obj.name} quantity={obj.quantity} price={obj.price} total={obj.total()}
                            modifyOrder={modifyOrder} />
                    );
                    
                } )
            }
        </div>
    );
}

function Cart_SubItem({index, name, quantity, price, total, modifyOrder}){    
    
    return(
        <div className='Cart_SubItem'>

            <div className='productInfo'>
                <p className='productName'>{name}</p>
                <p className='productQuantity'>{quantity}x</p>
                <p className='productPrice'>@${price}</p>
                <p className='productTotalPrice'>${total}</p>
            </div>

            <button className='RemoveProduct' onClick={ () => modifyOrder(index, -quantity) } >
                <img src='/images/icon-remove-item.svg' alt='RemoveIcon' ></img>
            </button>
            
        </div>
    );
}

export default Cart;