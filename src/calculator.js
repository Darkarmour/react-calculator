import React from 'react';

import { Operand } from './operand';
import { Operation } from './operation';

class Calculator extends React.Component {

    priorities = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
    };

    constructor(props) {
        super(props);
        this.state = {
            result: undefined,
            currentOperands: [],
            currentOperations: [],
            previousResults: [],
            lastAdded: undefined
        }
    }

    renderOperand(op) {
        return <Operand value={op} onClick={() => this.handleOperandOnClicked(op)} />
    }

    renderOperation(opa) {
        return <Operation value={opa} onClick={() => this.handleOperationOnClicked(opa)} />
    }

    handleOperandOnClicked(op) {
        let lastAdded = this.state.lastAdded;
        let currentOperands = this.state.currentOperands;
        if (lastAdded === 'operand' && (currentOperands.length))
            currentOperands[currentOperands.length - 1] = currentOperands[currentOperands.length - 1] + op;
        else
            currentOperands.push(op);
        this.setState({
            lastAdded: 'operand',
            currentOperands: currentOperands
        })
    }

    handleOperationOnClicked(opa) {
        if (opa === 'C') {
            this.setState({
                result: undefined,
                currentOperands: [],
                currentOperations: [],
                previousResults: [],
                lastAdded: undefined
            });
        }
        else if (opa === '=') {
            let result = this.getResult(this.state.currentOperands, this.state.currentOperations);
            // let previousResults = this.state.previousResults;
            // previousResults.push(currentCalculation);
            // currentCalculation = undefined;
            // this.setState({
            //     result: result,
            //     currentCalculation: currentCalculation,
            //     previousResults: previousResults
            // })
        }
        else {
            let currentOperations = this.state.currentOperations;
            currentOperations.push(opa);
            this.setState({
                lastAdded: 'operation',
                currentOperations: currentOperations
            });
        }
    }

    render() {
        const previousResults = this.state.previousResults.map((previousResult, index) => {
            return (
                <p key={'previous' + index}>{previousResult}</p>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md margin-top_16">
                            {previousResults}
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
                            {/* <p>{this.state.currentCalculation}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getResult(operands, operations) {
        let expression = this.getExpression(this.state.currentOperands, this.state.currentOperations);
        let calculationChars = [];
        let operand;
        for (let i = 0; i < expression.length; i++) {
            if (operand) {

            }

        };
        console.log(calculationChars)
        let index = calculationChars.findIndex(i => i === '*' || i === '/');
        if (index > -1) {

        }
        else {
            let result = 0;
            let operation = undefined;
            for (let character of calculationChars) {
                switch (character) {
                    case '+':
                        operation = 'add';
                        break;
                    case '-':
                        operation = 'sub';
                        break;
                    default:
                        if (operation === 'add')
                            result += Number(character);
                        else if (operation === 'sub')
                            result -= Number(character);
                        else
                            result = Number(character);
                        operation = undefined;
                        break;
                }
            }
            return result;
        }
    }

    getExpression(operands, operations) {
        console.log(operands, operations)
        let expression = ''
        for (let index = 0; index < operands.length; index++) {
            expression += operations[index] ? (operands[index] + operations[index]) : operands[index];
        }
        return expression;
    }
}

export default Calculator;