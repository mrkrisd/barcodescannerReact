import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation'; 

import Login from './src/Login/Login'; 
import Register from './src/Register/Register'; 
import Scanner from './src/Scanner/Scanner'; 

export default App = StackNavigator({ 
  Login: { screen: Login }, 
  Register: { screen: Register }, 
  Scanner: { screen: Scanner }
}); 