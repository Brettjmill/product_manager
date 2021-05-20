import {Link, Redirect, Router} from '@reach/router';

import './App.css';

import Product from './views/SingleProduct';
import Main from './views/Main';

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Router>
        <Main path='/'/>
        <Product path='/products/:id' />
      </Router>
    </div>
  );
}

export default App;
