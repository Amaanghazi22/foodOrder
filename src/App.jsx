import React from 'react';
import Header from "./Components/Header"
import {Outlet} from 'react-router-dom'
import appStore from './app/store';
import {Provider} from "react-redux";

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Header/>
        <Outlet/>
      </Provider>
    </>
  )
}

export default App
