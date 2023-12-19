// app/javascript/packs/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Greeting from '../components/Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Greeting} />
      </Router>
    </Provider>
  );
};

export default App;
