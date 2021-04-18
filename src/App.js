import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home/Home';
import Shop from './Components/Body/Shop/Shop';
import Contact from './Components/Body/Contact/Contact';
import SignUp from './Components/SignUp/SignUp';

import NavToggleContextProvider from './Contexts/NavToggleContext';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavToggleContextProvider>
          <Header />
        </NavToggleContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/Contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
