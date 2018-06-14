import * as React from 'react';
import './Banners.scss';

interface IProps {

}

interface IState {

}

export default class Banners extends React.Component<IProps, IState> {
    banner1: any;
    banner2: any;
    banner3: any;
    constructor(props) {
        super(props);
        this.banner1 = require('../../content/img/mcd-banner-final.jpg');
        this.banner2 = require('../../content/img/McD_rmhc_final.jpg')
        this.banner3 = require('../../content/img/banner-6.jpg')
    }

    render() {
        return (
            <div className="container-fluid banners-container">
               <div className="row banners-row">
                   <div className="col-xs-16">
                        <div className="banner1"></div>
                   </div>
                   <div className="col-xs-8">
                       <div className="banner2">
                            <div className="row">
                                <div className="col-xs-12 banner-content">
                                    <div>
                                        <h3>Помогите семьям быть ближе</h3>
                                        <p>Отсканируйте QR-код и поддержите проекты Фонда. Подробнее на rmhc.ru</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="banner3">
                       <div className="row">
                                <div className="col-xs-12 banner-content">
                                    <div>
                                        <h3>Наша еда. Ваши вопросы.</h3>
                                        <p>Мы ответили на тысячи вопросов о нашей еде! Найди ответ на свой вопрос или задай его нам!</p>
                                    </div>
                                </div>
                            </div>
                       </div>

                   </div>
               </div>
            </div>
        );
    };
}