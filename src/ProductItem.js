import './ProductItem.css'
import AddToCartButton from './AddToCartButton'

function ProductItem({productid, image, category, name, price, order, modifyOrder}){
    
    // When the product is selected, set the border of the image to red
    // Add class 'productActive' to img if isActive is true 
    let isActive = false;
    if( order.find( order => order.id === productid ) != undefined ){
        isActive = true;
    }

    return(
        <div className="productContainer">

            <div className="productImgContainer">

                <img className={`productImage ${isActive? 'productActive' : ''}`} 
                    alt="product_image" src={image}>
                </img>

                <AddToCartButton className="AddToCartButton" 
                    productid={productid} order={order} modifyOrder={modifyOrder} />
            </div>

            <p className="category">{category}</p>
            <p className="name">{name}</p>
            <p className="price">${price.toFixed(2)}</p>

        </div>
    );
}

export default ProductItem;