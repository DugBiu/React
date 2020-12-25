import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example'
import State from './State'
import Effect from './Effect'
import Context from './Context'
import Reducer from './Reducer'
import Demo from './Demo'
import ReducerDemo1 from './ReducerDemo1'
import './style.css'
const App = (
  <div>
    <Example />
    <State />
    <Effect />
    <Context />
    <Reducer />
    <hr />
    <Demo />
    <ReducerDemo1 />
  </div>
  
)
  
ReactDOM.render( App, document.getElementById('root') );
