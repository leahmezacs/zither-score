import React, {Component} from "react";
import "../../stylesheets/style.css";
// import DoubleDot from '../../assets/icons';

class ToolBar extends Component {
  render() {
    return (
      <div className="score-toolbar reg">
        <div className="score-toolbar-inner">
          <div className="score-toolbar-main">
            <div className="score-toolbar-main-tabs">
              <button id="toolbar-mode-note">Note</button>
              {/* <button id="toolbar-mode-articulation" className>Articulation</button>
              <button id="toolbar-mode-ornament">Ornament</button>
              <button id="toolbar-mode-measure">Measure</button> */}
            </div>
            <div className="score-toolbar-doc">
              <div className="toolbar-group">
                
              </div>
            </div>
          </div>
          <div className="score-toolbar-div"></div>
          <div className="score-toolbar-sub">
            <button className="toolbar-icon mr-2 ml-3">Dot</button>
            <button className="toolbar-icon">Double Dot
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="42" viewBox="0 0 35 42">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h36v42H0z"></path>
                  <path d="M67.58 44.795c13.569 0 22.201-11.101 22.201-22.598C89.781 11.101 81.149 0 67.58 0 53.213 0 44.994 11.101 44.994 22.197c0 11.497 8.219 22.598 22.586 22.598zM67.58 134.775c13.569 0 22.201-11.101 22.201-22.602 0-11.101-8.632-22.193-22.201-22.193-14.367 0-22.586 11.093-22.586 22.193 0 11.502 8.219 22.602 22.586 22.602z"/>
                </g>
              </svg> */}
            </button>
            <button className="toolbar-icon mr-2 ml-2">Line</button>
            <button className="toolbar-icon mr-2 ml-3">Double Line</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToolBar;
