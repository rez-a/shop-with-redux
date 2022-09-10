import React from 'react';
import { shorterTitle, shorterPrice } from '../helper/functions';
import { HiPlus, HiMinus, HiOutlineTrash } from "react-icons/hi";
import { checkOut, decrement, emptyCart, increment, removeFromCart } from '../redux/cart/ActionCreators';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, cartCounter, total, checkout } = useSelector(state => state.cart);
    return (
        cart.length > 0 ?
            <div className={`row g-3 ${styles.cart}`}>
                <div className="col-lg-8 col-12">
                    <ul className="cart ps-0">
                        {
                            cart.map(product =>
                                <li key={product.id} className="mb-3 d-flex align-items-center w-100 justify-content-between bg-white py-2 px-3 rounded border">
                                    <img src={product.image} alt={product.title} className="image-product" />
                                    <div>
                                        <p className='mb-0 fw-bold text-primary'>{shorterTitle(product.title)}</p>
                                        <p className='text-success'>${product.price}</p>
                                    </div>
                                    <p className='bg-warning px-2 rounded mb-0 text-white className="btn btn-sm btn-primary"'>{product.qty}</p>
                                    <div>
                                        {
                                            product.qty === 1 ?
                                                <button onClick={() => dispatch(removeFromCart(product.id))} className="btn btn-sm btn-primary"><HiOutlineTrash /></button> :
                                                <button onClick={() => dispatch(decrement(product.id))} className="btn btn-sm btn-primary"><HiMinus /></button>
                                        }
                                        <button onClick={() => dispatch(increment(product.id))} className="btn btn-sm btn-primary ms-2"><HiPlus /></button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="card">
                        <div className="card-body">
                            <p className='fw-bold text-primary'>Total Item : <span className='text-muted'>{cartCounter}</span></p>
                            <p className='fw-bold text-primary'>Total Payments : <span className='text-muted'>${shorterPrice(total)}</span></p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <button onClick={() => dispatch(emptyCart())} className='btn btn-link text-success text-decoration-none'>Clear</button>
                                <button onClick={() => dispatch(checkOut())} className='btn btn-sm btn-success'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            checkout ?
                <div className={`row ${styles.cart}`}>
                    <div className="col-12 text-end">
                        <p className='fw-bold text-success'>Checked Out Successfully</p>
                        <Link to='/products' className='btn btn-sm btn-primary'>Buy more</Link>
                    </div>
                </div> :
                <div className={`${styles.cart} row`}>
                    <div className="col-12 text-end">
                        <p className='fw-bold text-success'>Want to buy ?</p>
                        <Link to='/products' className='btn btn-sm btn-primary'>Go to shop</Link>
                    </div>
                </div>


    );
};

export default Cart;