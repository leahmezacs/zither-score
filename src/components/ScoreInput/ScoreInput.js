import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap/';
import ToolBar from '../ToolBar/ToolBar';

const inputStyle = {
    fontSize: '20px',
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

<<<<<<< HEAD


class ScoreInput extends Component {
=======
class ScoreInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClick: false
        }

        this.handleToolBar = this.handleToolBar.bind(this);
    }

    handleToolBar() {
        this.setState(state => ({
            isClick: !state.isClick
          }));
        console.log(this.state.isClick);
    }

>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
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
<<<<<<< HEAD
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'0, 0'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 1'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 2'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'0, 3'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
=======
                    <p style={pStyle}>||</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton data-toggle="modal" data-target="#exampleModal" onClick={this.handleToolBar} value={'0, 0'} style={buttonStyle}>
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
>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'1, 0'} style={buttonStyle}>
<<<<<<< HEAD
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 1'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 2'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'1, 3'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
=======
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
>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'2, 0'} style={buttonStyle}>
<<<<<<< HEAD
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 1'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 2'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'2, 3'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
=======
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
>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                    <ToggleButtonGroup type="checkbox" defaultValue={['', '']} style={toggleStyle}>
                        <ToggleButton value={'3, 0'} style={buttonStyle}>
<<<<<<< HEAD
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 1'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 2'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    
                        <ToggleButton value={'3, 3'} style={buttonStyle}>
                            <input style={inputStyle} class="note" type="text" maxlength="1" onKeyPress={(inp) => this.numberOnly(inp)}></input> 
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <p style={pStyle}>|</p>
                </div>
                  
=======
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
                    <p style={pStyle}>||</p>
                </div>

                {this.state.isClick ?
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{<ToolBar />}</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
            </div>
        )
    }
}

<<<<<<< HEAD
export default withRouter(ScoreInput);
=======
export default withRouter(ScoreInput);
>>>>>>> 21fa10b00f8fb9e26f82195779614b607e6f6c16
