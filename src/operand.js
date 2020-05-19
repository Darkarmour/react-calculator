import React from 'react';

export class Operand extends React.Component {

    render() {
        return (
            <button type="button" className="btn btn-secondary margin_16 btn-lg">{this.props.value}</button>
        );
    }
}
