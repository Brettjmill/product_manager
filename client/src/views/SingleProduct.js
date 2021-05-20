import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const Product = (props) => {
    const [prod, setProd] = useState({});

    const handleDelete = () => {
      axios
        .delete("http://localhost:8000/api/products/" + props.id)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
              <hr></hr>
              <button onClick = {(event) => { handleDelete() }}>Delete</button>
              <div>
                <Link to={'/products/' + prod._id + '/update'}>Edit Product</Link>
              </div>
              <div>
                <Link to='/'>Return to Full List</Link>
              </div>
          </div>
      );
};

export default Product;