import React from 'react';
import { shorterTitle } from '../../helper/functions';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiPlus, HiMinus, HiOutlineTrash } from "react-icons/hi";
import { addToCart, decrement, increment, removeFromCart } from '../../redux/cart/ActionCreators';

const Product = ({ product }) => {
    const { title, price, image, id } = product;
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const productItem = cart.find(item => item.id === product.id);
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className="card p-2 product" >
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body mt-3">
                    <h5 className="card-title">{shorterTitle(title)}</h5>
                    <p className="card-text">${price}</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Link className='text-decoration-none' to={`./${id}`}>Details</Link>
                        {
                            productItem ?
                                <div>
                                    {
                                        productItem.qty === 1 ?
                                            <button onClick={() => dispatch(removeFromCart(id))} className="btn btn-sm btn-primary"><HiOutlineTrash /></button> :
                                            <button onClick={() => dispatch(decrement(id))} className="btn btn-sm btn-primary"><HiMinus /></button>
                                    }
                                    <span className='quantity mx-2'>{productItem.qty}</span>
                                    <button onClick={() => dispatch(increment(id))} className="btn btn-sm btn-primary"><HiPlus /></button>
                                </div> :
                                <button onClick={() => dispatch(addToCart(product))} className="btn btn-sm btn-primary add-btn">Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;