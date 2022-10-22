import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = (props) => {
    const {name,img, price, quantity, shipping} = props.product
   
    const {product, handleRemoveProduct} = props;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
            <div className='review-item-details'>
                <p className='product-name' title={name}> {name.length > 20 ? name.slice(0,20)+'...' : name}</p>
                <p>Price: <span className='orange-color'>$ {price}</span> </p>
                <p><small>Shipping:$ {shipping}</small></p>
                <p><small>Quantity: {quantity}</small></p>
            </div>
            <div className='delete-container'>
                <button onClick={()=>handleRemoveProduct(product)} className='dlt-btn'>
                    <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;