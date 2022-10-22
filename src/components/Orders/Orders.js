import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct=(product)=>{
        const rest= cart.filter(pd=> pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }

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
                    <Link to='/inventory'><button>Proceed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;