import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const Product = (props) => {
    const [prod, setProd] = useState({});

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/products/" + props.id)
          .then((res) => {
            console.log(res);
            setProd(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [props.id]);

      return (
          <div>
              <h3>{prod.title}</h3>
              <p>Price: {prod.price}</p>
              <p>Description: {prod.description}</p>
              <Link to='/products'>Return to Full List</Link>
          </div>
      );
};

export default Product;