import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton} from 'react-bootstrap/';

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
    constructor(props){
        super(props);
        this.state = {
            isClick: false
        }

        this.handleToolBar = this.handleToolBar.bind(this);
    }

    handleToolBar() {
        this.setState({
            isClick: !this.state.isClick
        })
    }

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
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton onClick={this.handleToolBar} value={'0, 0'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 1'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 2'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 3'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'1, 0'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 1'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 2'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 3'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'2, 0'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 1'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 2'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 3'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'3, 0'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 1'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 2'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 3'} style={buttonStyle}>
                            <input style={inputStyle} className="note" type="text" maxLength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                </div>
                  
            </div>
        )
    }
}

export default withRouter(ScoreInput);
