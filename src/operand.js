import React from 'react';

export class Operand extends React.Component {

    render() {
        return (
            <button type="button" className="btn btn-light margin_16 btn-lg" onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}
