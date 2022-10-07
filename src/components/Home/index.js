import React, { Component } from 'react';
import * as BsIcons from "react-icons/bs";


export default class Home extends Component {
  render() {
    return (
      <div className="desktop-main">
        <div className="taskbar-bottom">
          <div className="tasks-icons">
            <div className="task">
              <BsIcons.BsWindows className="window-icon" />
            </div>
            <div className="task">
              <BsIcons.BsFolderFill className="folder-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}