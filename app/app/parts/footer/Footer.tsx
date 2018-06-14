import * as React from 'react';

import './Footer.scss';
import MenuList from '../../../../common/components/menu-list/MenuList';


interface IProps {

}

interface IState {

}

export default class Footer extends React.Component<IProps, IState> {
    mainFooterItems: any;
    footerItems: any;
    footerContainerClass: string;
    footerItemsClass: string;
    footerMainItemsClass: string;
    
    constructor(props) {
        super(props);
        this.mainFooterItems = [
            'новинки и акции',
            'основное меню',
            'макзавтрак',
            'хэппи мил'
        ];
        this.footerItems = [
            'Рестораны',
            'Качество',
            'Родителям и детям',
            'Работа в Макдональдс',
            'Компания',
            'Контакты'
        ];
        this.footerContainerClass = 'footer-menu';
        this.footerMainItemsClass = 'footer-main-header';
        this.footerItemsClass = 'footer-header';

    }
    render() {
        return (
            <div className="footer">
                <div className="contact-header">
                    Контакт центр 8(800)7044499
                </div>
                <MenuList items={this.mainFooterItems} containerClass={this.footerContainerClass} itemsClass={this.footerMainItemsClass}/>
                <MenuList items={this.footerItems} containerClass={this.footerContainerClass} itemsClass={this.footerItemsClass}/>
            </div>
        );
    };
    
}