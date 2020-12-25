import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example'
import State from './State'
import Effect from './Effect'
import Context from './Context'
import Reducer from './Reducer'
import './style.css'
const App = (
  <div>
    <Example />
    <State />
    <Effect />
    <Context />
    <Reducer />
  </div>
  
)
  
ReactDOM.render( App, document.getElementById('root') );
