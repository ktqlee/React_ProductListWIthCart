import './DessertsContainer.css'
import ProductItem from "./ProductItem";

// productData contains data from json file
// order is the state for shopping cart
function DessertsContainer({productData, order, modifyOrder}){
    return(
        <div className='DessertsContainer'>
            <h1>Desserts</h1>
            <div className="itemsContainer">
            {   
                productData.map((item, index)=>{
                    return (
                        <ProductItem 
                            key={index} productid={index} image={item.image.desktop} 
                            category={item.category} name={item.name} price={item.price}
                            order={order} modifyOrder={modifyOrder}
                        />
                    )
                })
            }
            </div>
        </div>
    );
}

export default DessertsContainer;