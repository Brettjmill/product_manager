import React, { useState, useEffect } from 'react';

import axios from 'axios';

import NewProducts from './NewProduct';
import AllProducts from './AllProducts';

const Main = (props) => {

    const [products, setProducts] = useState([]);

    const fetchAllProducts = () => {
        axios
        .get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });        
    }

    useEffect(() => {
        fetchAllProducts()
    }, []);

    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <NewProducts
                fetchAllProducts = {fetchAllProducts}/>
            <hr></hr>
            <AllProducts 
                fetchAllProducts = {fetchAllProducts}
                products = {products}/>
        </div>
    )
}

export default Main;