import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user') ?
      <Component {...props} /> :
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
);