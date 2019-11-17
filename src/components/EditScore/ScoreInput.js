import React, { Component } from "react";
import SingleLineScoreInput from "./SingleLineScoreInput"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

class ScoreInput extends Component {
    constructor(props) {
        super(props);
        // const lineLength = []
        this.state = {
            lineLength: []
        }

        this.handleNewLine = this.handleNewLine.bind(this);
    }

    handleNewLine = (event) =>{
        event.preventDefault();
        this.setState((preState) => ({
            lineLength: [...preState.lineLength, 1]
        }))
    }

    render() {
        return (
            <Container maxWidth="lg">
                <button onClick={this.handleNewLine}>
                    <ControlPointIcon />
                </button>
                <form>
                    {/* {this.state.lineLength.map((line) => ( */}
                        <SingleLineScoreInput lineLength={this.state.lineLength} key={this.state.lineLength} />
                {/* ))} */}
                    {/* <SingleLineScoreInput /> */}
                </form>
            </Container>
        )
    }

}

export default ScoreInput;