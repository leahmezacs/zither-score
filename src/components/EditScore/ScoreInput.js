import React, { Component } from "react";
import SingleLineScoreInput from "./SingleLineScoreInput"
import Container from "@material-ui/core/Container";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

class ScoreInput extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <button onClick={this.handleNewLine}>
                    <ControlPointIcon />
                </button>
                <form>
                    <SingleLineScoreInput />
                </form>
            </Container>
        )
    }

}

export default ScoreInput;