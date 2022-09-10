import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../redux/products.js/ActionCreator';
import Product from './shared/Product';
import styles from './Store.module.css';

const Store = () => {
    const { loading, products, error } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products.length) dispatch(fetchProducts());
    }, [])



    return (
        <div className={`row g-3 ${styles.products}`}>
            {
                loading ?
                    <p>Loading...</p> :
                    error ?
                        <p className='text-danger'>something want wrong</p> :
                        products.map(product => <Product key={product.id} product={product} />)
            }
        </div>
    );
};

export default Store;