import React, {Component} from "react";
import "../../stylesheets/style.css";

class ToolBar extends Component {
  render() {
    return (
      <div className="score-toolbar reg">
        <div className="score-toolbar-inner">
          <div className="score-toolbar-main">
            <div className="score-toolbar-main-tabs">
              <button id="toolbar-mode-note" className>Note</button>
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
            <button className="toolbar-icon mr-2 ml-2">Double Dot</button>
            <button className="toolbar-icon mr-2 ml-2">Line</button>
            <button className="toolbar-icon mr-2 ml-3">Double Line</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToolBar;
