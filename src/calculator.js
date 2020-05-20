import React from 'react';

import { Operand } from './operand';
import { Operation } from './operation';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: undefined,
            currentCalculation: undefined,
            previousCalculations: []
        }
    }

    renderOperand(op) {
        return <Operand value={op} onClick={() => this.handleOperandOnClicked(op)} />
    }

    renderOperation(opa) {
        return <Operation value={opa} onClick={() => this.handleOperationOnClicked(opa)} />
    }

    handleOperandOnClicked(op) {
        let currentCalculation = this.state.currentCalculation || '';
        currentCalculation += `${op}`;
        this.setState({
            currentCalculation: currentCalculation
        });
    }

    handleOperationOnClicked(opa) {
        if (opa === 'C') {
            this.setState({
                result: undefined,
                currentCalculation: undefined,
                previousCalculations: []
            });
        }
        else if (opa === '=') {
            let currentCalculation = this.state.currentCalculation;
            let result = 0;
            let operation = undefined;
            for (var i = 0; i < currentCalculation.length; i++) {
                let character = currentCalculation[i];
                console.log(character, operation, result);
                switch (character) {
                    case '+':
                        operation = 'add';
                        break;
                    case '-':
                        operation = 'sub';
                        break;
                    case '*':
                        operation = 'mul';
                        break;
                    case '/':
                        operation = 'div';
                        break;
                    default:
                        if (operation === 'add')
                            result += Number(character);
                        else if (operation === 'sub')
                            result -= Number(character);
                        else if (operation === 'mul')
                            result *= Number(character);
                        else if (operation === 'div')
                            result /= Number(character);
                        else
                            result = Number(character);
                        operation = undefined;
                        break;
                }
            }
            let previousCalculations = this.state.previousCalculations;
            previousCalculations.push(currentCalculation);
            currentCalculation = undefined;
            this.setState({
                result: result,
                currentCalculation: currentCalculation,
                previousCalculations: previousCalculations
            })
        }
        else {
            let currentCalculation = this.state.currentCalculation;
            currentCalculation += `${opa}`;
            this.setState({
                currentCalculation: currentCalculation
            })
        }
    }

    render() {
        const previousCalculations = this.state.previousCalculations.map(previousCalculation => {
            return (
                <p>{previousCalculation}</p>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md margin-top_16">
                            {previousCalculations}
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
                                    <span className="input-group-text" id="inputGroup-sizing-default">Result</span>
                                </div>
                                <input type="number" className="form-control" value={this.state.result || ''} disabled />
                            </div>
                            <p>{this.state.currentCalculation}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;