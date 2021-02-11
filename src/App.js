import React, { Fragment} from 'react';

//Components
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import NewProduct from './components/NewProduct.jsx';
import EditProduct from './components/EditProduct.jsx';

//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return (
    <Router>
      <Provider store={Store}>
        <Header/>
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/products/new' component={NewProduct}/>
            <Route exact path='/products/edit/:id' component={EditProduct}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
