import React, { useEffect, useState } from 'react';

import { Link, navigate } from '@reach/router';

import axios from 'axios';

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/' + props.id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newProduct = {
            title: title,
            price: price,
            description: description,
        };

        axios
            .put('http://localhost:8000/api/products/' + props.id, newProduct)
            .then((res) => {
                navigate('/products/' + props.id);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Update Product:</h1>
            <form
                onSubmit = {(event) => {
                    handleSubmit(event);
                }}
            >
                <div>
                    <label>Title: </label>
                    <input
                        onChange = {(event) => {
                            setTitle(event.target.value);
                        }}
                        type = 'text'
                        value = {title}
                    />
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        onChange = {(event) => {
                            setPrice(event.target.value);
                        }}
                        type = 'text'
                        value = {price}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        onChange = {(event) => {
                            setDescription(event.target.value);
                        }}
                        type = 'text'
                        value = {description}
                    />
                </div>
                <button>Submit</button>
                <div>
                <Link to='/'>Return to Full List</Link>
              </div>
            </form>
        </div>
    );
};

export default UpdateProduct;