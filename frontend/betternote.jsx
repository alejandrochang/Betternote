import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signup, login, logout} from './util/session_api_util';
import {$, jQuery} from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Betternote Project</h1>, root);
  window.signup =  signup;
  window.login = login;
  window.logout =  logout;
  const person = {username: 'alejandro', password: 'safdsad', email: 'ryan@cookies'}
  window.person = person;
  window.$ = $;
});
