import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home/Home';
import Shop from './Components/Body/Shop/Shop';
import Contact from './Components/Body/Contact/Contact';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

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
          <Route path="/home" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/log-in" exact component={SignIn} />
          <Route path="/log-in" exact component={SignIn} />
        </Switch>
      </Router>
        <Footer />
    </React.Fragment>
  );
}

export default App;
