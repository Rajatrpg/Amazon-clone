import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeItem = () => {
        //Remove from basket...
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    };

    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p>{title}</p>
                <p className="productcart__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                        <p>*</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={removeItem}>Remove From basket</button>
        </div>
    )
}

