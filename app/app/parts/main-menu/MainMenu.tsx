import * as React from 'react';

import './MainMenu.scss';
import MenuList from '../../../../common/components/menu-list/MenuList';


interface IProps {

}

interface IState {

}

export default class MainMenu extends React.Component<IProps, IState> {
    menuItems: string[];
    menuContainerClass: string;
    menuItemsClass: string;

    constructor(props) {
        super(props);
        this.menuItems = [
            'рестораны',
            'качество',
            'родителям и детям',
            'работа в макдональдс',
            'компания',
            'контакты',
            'москва'
        ];
        this.menuContainerClass = 'menu-header';
        this.menuItemsClass = 'menu-item';
    }

    render() {
        return (
            <div className="main-menu">
                <MenuList items={this.menuItems} containerClass={this.menuContainerClass} itemsClass={this.menuItemsClass}/>
            </div>
        );
    };
}