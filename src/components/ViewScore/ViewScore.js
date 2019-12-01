import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/scorestylesheet.css";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import PDFObject from 'pdfobject';
import jsPDF from "jspdf";
//import PDFViewer from "./PDFViewer";

class ViewScore extends Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf('?') + 1, url.length),
      score: [],
      notes: []
    };    
    this.generatePDF = this.generatePDF.bind(this);
    //console.log(this.state.score_id);
  }
  async componentDidMount() {
    const result = await API.graphql(
      graphqlOperation(queries.getScore, {
        id: this.state.score_id
      })
    );
    // console.log("id: ", this.state.score_id);
    this.setState({
      score: result.data.getScore
    });
    //Get list of notes belonging to this score id
    const noteList = await API.graphql(graphqlOperation(queries.listNotes, { 
        limit: 200, 
        filter: {
            scoreId: {
            eq: this.state.score_id
            }
        }
    }));  
    this.setState({
        notes: noteList.data.listNotes.items
    });
  }

  generatePDF(){
    var doc = new jsPDF(); //pdf created
    doc.setProperties({
        title: this.state.score.name
    });
    doc.line(20, 36, 180, 36);
    doc.setFontSize(14); doc.text(20, 44, "By: "+ this.state.score.user); //creator
    var addLineBars = function(i) {
        for (var j=0; j <= 4; j++) {
            doc.line( (20+(j*40)), (50+(i*25)),  (20+(j*40)), (65+(i*25))); // horizontal line
        }
    };
    
    //Map notes to their corresponding position 
    this.state.notes.forEach((note) => {
        var pos = note.position; //array of coordinates [row, column, index]
        var data = note.number;
        doc.text( (23+(pos[1]*40)+(pos[2]*10)),  (58+(pos[0]*25)), data.toString());
        addLineBars(pos[0]);
    });
    
    return (
        <div>
             <p>Hello</p>
        </div>
    );
    
  }

  render() {
    //console.log(this.state.score_name);
    return (
      <div>
        <div id="main-content" className="score-scrollable">
            <g className="page-main">
                <div id="pdf-window"> 
                    {this.generatePDF()}
                </div>
            </g>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewScore);
