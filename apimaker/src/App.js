import React from 'react';

import Api from "./Components/Api"
import {connect} from "react-redux"
import { getApi } from "./Actions/actions"
import './App.css';

export default function App(props) {

  
  return (
    <div className="App" >
      <h1>Rick and Morty characters</h1>
      <Api />
    </div>
  );
}

