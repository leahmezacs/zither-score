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
                <div>
                -->This is where curves go    
                </div>
                <div>
                -->This should enable/disable dots above numbers
                </div> 
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
                <div>
                -->This should enable/disable dots below numbers
                </div>  
            </div>
        )
    }
}

export default withRouter(ScoreInput);