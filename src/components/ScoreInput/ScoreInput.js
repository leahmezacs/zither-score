import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { InputGroup, ToggleButtonGroup, ToggleButton} from 'react-bootstrap/';

const inputStyle = {
    fontSize: '12px',
    width: '15px',
    height: '20px',
    position: 'absolute center'
};

const buttonStyle = {
    width:'30px',
    height: '40px',
    padding: '5px',
    margin: '1px',
    position: 'relative'
};

const pStyle = {
    fontSize: '25px',
    float: 'left',
    display: 'inline'
};

const toggleStyle = {
    float: 'left',
    display: 'inline'
};



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
                <div>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']}>
                        <p style={pStyle}>|</p>
                        <ToggleButton value={'0, 0'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'[0, 1]'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'[0, 2]'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'[0, 3]'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                  
            </div>
        )
    }
}

export default withRouter(ScoreInput);