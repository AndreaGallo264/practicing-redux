import React, { Fragment} from 'react';

//Components
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import NewProduct from './components/NewProduct.jsx';
import EditProduct from './components/EditProduct.jsx';

//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={Products}/>
          <Route exact path='/products/new' component={NewProduct}/>
          <Route exact path='/products/edit/:id' component={EditProduct}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
