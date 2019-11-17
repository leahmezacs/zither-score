import React, { Component } from "react";
import SingleLineScoreInput from "./SingleLineScoreInput"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

class ScoreInput extends Component {
    constructor(props) {
        super(props);
        // const lineLength = []
        this.state = {
            line: 0,
            lineLength: []
        }

        this.handleNewLine = this.handleNewLine.bind(this);
    }

    handleNewLine = (event) =>{
        event.preventDefault();
        this.setState((preState) => ({
            line: this.state.line + 1,
            lineLength: [...preState.lineLength, this.state.line]
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
                        <SingleLineScoreInput lineLength={this.state.lineLength} key={this.state.line} />
                {/* ))} */}
                    {/* <SingleLineScoreInput /> */}
                </form>
            </Container>
        )
    }

}

export default ScoreInput;