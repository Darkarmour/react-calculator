import React from 'react';

import { Operand } from './operand';

class Calculator extends React.Component {
    renderOperand(i) {
        return <Operand value={i} />
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
                            </div>
                            <div className="padding_16">
                                {this.renderOperand(4)}
                                {this.renderOperand(5)}
                                {this.renderOperand(6)}
                            </div>
                            <div className="padding_16">
                                {this.renderOperand(7)}
                                {this.renderOperand(8)}
                                {this.renderOperand(9)}
                            </div>
                        </div>
                        <div className="col-md">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;