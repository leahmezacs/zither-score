import React, { Component } from 'react';
import { graphqlOperation, Auth, API } from 'aws-amplify';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class ListFeedbacks extends Component {
  constructor(props) {
    super(props);

    this.state = {
        open: false,
        comment: '',
        columns: [
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Date", field: "date" }
        ]
    };

    //this.handleClick = this.handleClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  //get public scores from all users
    async componentDidMount() {
        const limit = 100;
        const result = await API.graphql(graphqlOperation(queries.listFeedbacks, {limit}));
        console.log(result);

        this.setState({
            feedbacks: result.data.listFeedbacks.items
        });
        this.setState({
        data: this.state.feedbacks.map(feedback => {
            const feedbackId = feedback.id;
            const name = feedback.name;
            const email = feedback.email;
            const date = new Date(feedback.createdAt).toDateString();
            const comment = feedback.comment;
            return { feedbackId: feedbackId, name: name, email: email, date: date, comment: comment };
            })
        });
    }

    handleClickOpen(comment) {
        console.log(comment);
        this.setState({
            open: true,
            comment: comment
        });
    }

    handleClickClose() {
        this.setState({
            open: false
        })
    }

  /* async handleUpdateFeedback(feedback_id) {

  } */

    async handleDeleteFeedback(feedback_id) {
        const deletedFeedback = await API.graphql(graphqlOperation(mutations.deleteFeedback,{
            input:{
                id : feedback_id
            }
        }));
    }

    render() {
        return (
        <Container maxWidth="md">
            <Dialog
                open={this.state.open}
                onClose={this.handleClickClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Feedback</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        {this.state.comment}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClickClose} color="primary">
                        Mark as Resolved
                    </Button>
                    <Button onClick={this.handleClickClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <MaterialTable
            title="Feedback"
            columns={this.state.columns}
            data={this.state.data}
            onRowClick={(event, rowData) => this.handleClickOpen(rowData.comment)}
            />
        </Container>
        );
    }
}

export default ListFeedbacks;