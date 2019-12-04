import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/scorestylesheet.css";
import "../../stylesheets/style.css";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import jsPDF from "jspdf";
import $ from "jquery";
import Comment from "../Comment/Comment";

class ViewScore extends Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf('?') + 1, url.length),
      score: [],
      userId: '',
      notes: []
    };    
    this.generatePDF = this.generatePDF.bind(this);
    //console.log(this.state.score_id);
  }
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    const result = await API.graphql(
      graphqlOperation(queries.getScore, {
        id: this.state.score_id
      })
    );
    // console.log("id: ", this.state.score_id);
    this.setState({
      score: result.data.getScore,
      userId: user.username
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
    doc.setFont("helvetica");
    var addLineBars = function(i) {
        for (var j=0; j <= 4; j++) {
            doc.line( (20+(j*40)), (50+(i*25)),  (20+(j*40)), (65+(i*25))); // horizontal line
        }
    };
    //Map notes to their corresponding position 
    this.state.notes.forEach((note) => {
        var pos = note.position; //array of coordinates [row, column, index]
        var data = note.number;
        if(note.dot === "TOP") { doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (50+(pos[0]*25)), .7, .7, 'F'); }
        if(note.dot === "BOTTOM") { doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (62+(pos[0]*25)), .7, .7, "F"); }
        if(note.doubleDot === "TOP") { 
            doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (48+(pos[0]*25)), .7, .7, 'F'); 
            doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (50+(pos[0]*25)), .7, .7, 'F'); 
        }
        if(note.doubleDot === "BOTTOM") { 
            doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (64+(pos[0]*25)), .7, .7, "F");
            doc.ellipse( (25+(pos[1]*40)+(pos[2]*10)), (62+(pos[0]*25)), .7, .7, "F");
        }
        if(note.line === true) { doc.line( (21+(pos[1]*40)+(pos[2]*10)), (59+(pos[0]*25)), (31+(pos[1]*40)+(pos[2]*10)),(59+(pos[0]*25)) ); }
        if(note.doubleLine === true) { 
            doc.line( (21+(pos[1]*40)+(pos[2]*10)), (60+(pos[0]*25)), (31+(pos[1]*40)+(pos[2]*10)),(60+(pos[0]*25)) );
            doc.line( (21+(pos[1]*40)+(pos[2]*10)), (59+(pos[0]*25)), (31+(pos[1]*40)+(pos[2]*10)),(59+(pos[0]*25)) );
        }
        doc.text( (23+(pos[1]*40)+(pos[2]*10)),  (58+(pos[0]*25)), data.toString());
        addLineBars(pos[0]);
    });
    
    var pdf = doc.output('datauri')
    $('iframe').attr('src', pdf)
    
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Welcome, Share Your Thoughts Below!</h1>
          <h2>Score Title: {this.state.score.name}</h2>
          <h2>Author: {this.state.userId}</h2>
          <h2>Last Updated: {this.state.score.updatedAt}</h2>
        </div>
        
        <div id="main-content" className="score-scrollable">
            <g className="page-main">
                <div id="pdf-window"> 
                    {this.generatePDF()}
                    <iframe type="application/pdf">
                      <p>Your browser does not support iframes.</p>
                    </iframe>
                </div>
            </g>
        </div>
        <Comment />
      </div>
    );
  }
}

export default withRouter(ViewScore);
