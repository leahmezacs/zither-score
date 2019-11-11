import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { InputGroup, ToggleButtonGroup, ToggleButton} from 'react-bootstrap/';

const inputStyle = {
    width: '20px',
    height: '25px',
    position: 'absolute center'
};

const buttonStyle = {
    width:'45px',
    height: '40px',
    padding: '5px',
    margin: '1px',
    position: 'relative'
};

const pStyle ={
    fontSize: '30px',
    position: 'relative'
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