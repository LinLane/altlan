import * as React from 'react';
import * as _ from 'lodash';

import MenuItem from './MenuItem';

interface IProps {
    items: string[],
    containerClass: string,
    itemsClass: string
}

interface IState {

}

export default class MenuList extends React.Component<IProps, IState> {
    itemsClass: string;
    constructor(props) {
        super(props);
        this.itemsClass = this.props.itemsClass;
    }
    render() {
        return (
            <ul className={this.props.containerClass}>
                {this.renderMenuItems()}
            </ul>
        );
    };
    renderMenuItems() {
        return _.map(this.props.items, (element, index) => {
            return <MenuItem text={element} itemsClass={this.itemsClass} key={index}/>
        })

    }
}