import React from 'react';

import { Operand } from './operand';
import { Operation } from './operation';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    renderOperand(i) {
        return <Operand value={i} onClick={() => this.handleOperandOnClicked(i)} />
    }

    renderOperation(i) {
        return <Operation value={i} onClick={() => this.handleOperationOnClicked(i)} />
    }

    handleOperandOnClicked(i) {
        let text = this.state.text;
        text += i;
        this.setState({
            text: text
        });
    }

    handleOperationOnClicked(i) {
        let text = this.state.text;
        text += i;
        this.setState({
            text: text
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                        </div>
                        <div className="col-md">
                            <div className="padding_16">
                                {this.renderOperand(1)}
                                {this.renderOperand(2)}
                                {this.renderOperand(3)}
                                {this.renderOperation('+')}
                            </div>
                            <div className="padding_16">
                                {this.renderOperand(4)}
                                {this.renderOperand(5)}
                                {this.renderOperand(6)}
                                {this.renderOperation('-')}
                            </div>
                            <div className="padding_16">
                                {this.renderOperand(7)}
                                {this.renderOperand(8)}
                                {this.renderOperand(9)}
                                {this.renderOperation('*')}
                            </div>
                            <div className="padding_16">
                                {this.renderOperation('C')}
                                {this.renderOperand(0)}
                                {this.renderOperation('=')}
                                {this.renderOperation('/')}
                            </div>
                        </div>
                        <div className="col-md margin-top_16">
                            <div className="input-group mb-3 margin-top_16">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Calculate</span>
                                </div>
                                <input type="text" className="form-control" value={this.state.text} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;