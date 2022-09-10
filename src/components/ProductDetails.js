import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useSelector(state => state.products);
    if (!isNaN(Number(id))) {
        const product = products.find(product => product.id === Number(id));
        const { image, title, price, description, category } = product;
        return (
            <div className={`row ${styles.productDetails}`}>
                <div className="col">
                    <div className="card card-details p-4 mb-3">
                        <div className="row g-0 align-items-center">
                            <div className="col">
                                <img src={image} className="img-fluid rounded-start" alt={title} />
                            </div>
                            <div className="col-md-8 ms-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-primary">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text fw-bold text-warning">Category : <span className='text-dark'>{category}</span></p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='price bg-success text-white rounded p-2'>${price}</p>
                                        <Link to='/products' className="btn btn-primary">Back to shop</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Navigate to='/products' replace />
        );
    }
};

export default ProductDetails;