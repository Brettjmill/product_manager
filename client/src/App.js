import {Link, Redirect, Router} from '@reach/router';

import './App.css';

import NewProducts from './views/NewProduct';

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <NewProducts/>
    </div>
  );
}

export default App;
