import React from "react";

import { Link, navigate } from "@reach/router";
import axios from "axios";

const AllProducts = (props) => {

  const fetchAllProducts = props.fetchAllProducts;

  const products = props.products;

  const handleDelete = (productToDel) => {
    axios
      .delete("http://localhost:8000/api/products/" + productToDel._id)
      .then((res) => {
        fetchAllProducts();
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
      <div>
          <h3>All Products:</h3>
          {products.map((prod) => {
            return (
                <div key = {prod._id}>
                    <Link to={`/products/${prod._id}`}>{prod.title}</Link>
                    <button
                      onClick = {(event) => {
                        handleDelete(prod);
                      }}
                    >
                      Delete
                    </button>
                </div>
              );
          })}
      </div>
  );
};

export default AllProducts;