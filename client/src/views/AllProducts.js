import React, { useEffect, useState } from "react";

import { Link } from "@reach/router";
import axios from "axios";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div>
          <h3>All Products:</h3>
          {products.map((prod) => {
            return (
                <div key = {prod._id}>
                    <Link to={`/products/${prod._id}`}>{prod.title}</Link>
                </div>
              );
          })}
      </div>
  );
};

export default AllProducts;