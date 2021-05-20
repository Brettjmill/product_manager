import {Router} from '@reach/router';

import './App.css';

import Product from './views/SingleProduct';
import Main from './views/Main';
import UpdateProduct from './views/UpdateProduct'

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Router>
        <Main path='/'/>
        <Product path='/products/:id' />
        <UpdateProduct path='/products/:id/update' />
      </Router>
    </div>
  );
}

export default App;
