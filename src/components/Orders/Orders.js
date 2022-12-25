import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    const handleRemoveProduct=(product)=>{
        const rest= cart.filter(pd=> pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }

    const navigate = useNavigate()

    return (
        <div className='shop-container'>

            {/* <h2>This is order: {products.length}</h2>
            <p>Cart has {cart.length}</p> */}
            
            <div className='review-items-container'>
                    {
                        cart.map(product=><ReviewItem product={product} key={product.key} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    {/* <Link to='/inventory'><button>Proceed Checkout</button></Link> */}
                        <button onClick={()=> navigate('/shipment') }>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;