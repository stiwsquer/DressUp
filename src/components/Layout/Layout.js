import { func } from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import NewsletterForm from '../NewsletterForm/NewsletterForm';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';

export default React.memo(() => (
  <Router>
    <Header />
    <main>
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </main>
    <NewsletterForm />
    <Footer />
  </Router>
));
