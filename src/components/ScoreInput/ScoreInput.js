import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { InputGroup, FormControl, Col} from 'react-bootstrap/';

const inputStyle = {
    width: '15px',
    height: '25px',
    margin: '10px',
};

const divStyle = {
    position: 'absolute'
}

class ScoreInput extends Component {
    numberOnly(num) {
        var ch = String.fromCharCode(num.which);
        if(!(/[0-7]/.test(ch))) {
            num.preventDefault();
        }
    }
    render () {
        return (
            <div>
                <InputGroup>
                    <div>
                        
                    </div>
                    <p>|</p>
                        <div>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        </div>
                        <div>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        </div>
                        <div>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        </div>
                        <div>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        </div>
                    <p>|</p>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                    <p>|</p>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                    <p>|</p>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                        <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input>
                    <p>|</p>
                </InputGroup>   
            </div>
        )
    }
}

export default withRouter(ScoreInput);