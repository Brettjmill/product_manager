import React from "react";

import { Link } from "@reach/router";

const AllProducts = (props) => {

  return (
      <div>
          <h3>All Products:</h3>
          {props.allProducts.map((prod) => {
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