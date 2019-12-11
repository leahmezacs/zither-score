import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/scorestylesheet.css";
import "../../stylesheets/style.css";
import { Auth, graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import jsPDF from "jspdf";
import $ from "jquery";
import Comment from "../Comment/Comment";
import {
  Box
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import * as subscriptions from '../../graphql/subscriptions';
import "./ViewScore.css";

class ViewScore extends Component {
  constructor(props) {
    super(props);
    const url = window.location.href;
    this.state = {
      score_id: url.slice(url.lastIndexOf('?') + 1, url.length),
      score: [],
      userId: '',
      notes: [],
      avgRate: 0,
    };    

    this.fetchRating = this.fetchRating.bind(this);
    this.generatePDF = this.generatePDF.bind(this);

    this.commentCreateSubscription = null;
    this.commentDeletionSubscription = null;
    //console.log(this.state.score_id);
  }

  // For fetching rating in the comment
  fetchRating = async(event) => {
    let tempRate = 0
    const comments = await API.graphql(
      graphqlOperation(queries.listComments, {
        limit: 100,
        filter: {
          scoreId: {
            eq: this.state.score_id
          }
        }
      })
    );
    this.setState({
      listComments: comments.data.listComments.items
    });
    this.state.listComments.map(comment => (
      tempRate += comment.rating
      // this.state.rating += comment.rating
    ))
    // console.log('tempRate = ' + tempRate)
    // console.log(this.state.listComments.length)
    this.setState({
      avgRate: tempRate/this.state.listComments.length
    })
    // console.log(this.state.listComments)
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

    // For fetching rating in the comment
    this.fetchRating();

    // this.commentCreateSubscription = API.graphql(graphqlOperation(subscriptions.onCreateComment)).subscribe({
    //   next: (commentData) => {
    //       const createComment = commentData.value.data.onCreateComment;
    //       const updatedComments = [...this.state.listComments, createComment];
    //       this.setState({
    //         listComments: updatedComments
    //       });
    //       this.fetchRating()
    //   },
    // });

    this.commentDeletionSubscription = API.graphql(graphqlOperation(subscriptions.onDeleteComment)).subscribe({
      next: (commentData) => {
          const commentID = commentData.value.data.onDeleteComment.id;
          const remainingComment = this.state.listComments.filter(comment => comment.id !== commentID);
          this.setState({
              listComments: remainingComment
          });
          this.fetchRating();
      },
    });
  }

  componentWillUnmount() {
    if (this.commentCreateSubscription) this.commentCreateSubscription.unsubscribe();
    if (this.commentDeletionSubscription) this.commentDeletionSubscription.unsubscribe();
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
        if(data) {
          doc.text( (23+(pos[1]*40)+(pos[2]*10)),  (58+(pos[0]*25)), data.toString());
        } 
        addLineBars(pos[0]);
    });
    
    var pdf = doc.output('datauri')
    $('iframe').attr('src', pdf)
    
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Welcome, Share Your Thoughts Below!</h1>
          <h2>Score Title: {this.state.score.name}</h2>
          <h2>Author: {this.state.userId}</h2>
          <h2>Last Updated: {new Date(this.state.score.updatedAt).toDateString()}</h2>
          <Box mb={3} borderColor="transparent">
            <div className="viewRating">
              <Box mr={2}>Rating: </Box>
              <Rating
                name="rating"
                value={this.state.avgRate}
                precision={0.1}
                size="large"
                readOnly
              />
              <Box ml={1}>{this.state.avgRate ? this.state.avgRate.toFixed(2) + ' out of 5': 'Not rated yet'}</Box>
            </div>
          </Box>
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
