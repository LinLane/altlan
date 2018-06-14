import * as React from 'react';

interface IProps {
    text: string,
    itemsClass: string;
}

interface IState {
    
}

export default class MenuItem extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <li className={this.props.itemsClass}>
                <a href="#">{this.props.text}</a>
            </li>
        );
    };
}