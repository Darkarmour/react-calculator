import React from 'react';

export class Operation extends React.Component {

    render() {
        return (
            <button type="button" className="btn btn-primary margin_16 btn-lg" onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}
