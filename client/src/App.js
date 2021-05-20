import {Link, Redirect, Router} from '@reach/router';

import './App.css';

import NewProducts from './views/NewProduct';
import AllProducts from './views/AllProducts';
import Product from './views/SingleProduct';

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <NewProducts/>
      <hr></hr>
      <Router>
        <Redirect from='/' to='/products' noThrow='true' />
        <AllProducts path='/products'/>
        <Product path='/products/:id' />
      </Router>
    </div>
  );
}

export default App;
