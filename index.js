import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@Components/Sidebar';

import '@Styles/App.scss';

import reducers from '@Reducer';
import { ViewFiles } from '@Pages';

import generatedummyFileSystem from '@Utils/dummyFileSystem';
import Home from './src/components/Home';
import * as BsIcons from 'react-icons/bs';

const rootEl = document.getElementById('root');

const store = createStore(
  reducers,
  {
    fileSystem:
      localStorage.getItem('fileSystem') &&
      Object.keys(localStorage.getItem('fileSystem')).length > 0
        ? JSON.parse(localStorage.getItem('fileSystem'))
        : generatedummyFileSystem()
  },
  composeWithDevTools()
);

const App = () => {
  const [isShow,setIsShow]=useState(true)
  const hide=()=>{
    setIsShow(!isShow)

  }
  return(
  <Provider store={store}>
    <Router>
      <BrowserRouter>
          {
            isShow ?  <div className="desktop-main">
              <div className="taskbar-bottom">
                <div className="tasks-icons">
                  <div className="task">
                    <BsIcons.BsWindows className="window-icon" />
                  </div>
                  <div onClick={hide} className="task">
                    <BsIcons.BsFolderFill className="folder-icon" />
                  </div>
                </div>
              </div>
            </div>: <Fragment>
              <Sidebar />
              <ViewFiles />
            </Fragment>
          }

      </BrowserRouter>
    </Router>
  </Provider>
);}

const renderComponent = Component => {
  render(<Component />, rootEl);
};

renderComponent(App);
