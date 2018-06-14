import * as React from 'react';
import MainMenu from '../app/parts/main-menu/MainMenu';
import Footer from '../app/parts/footer/Footer';
import FluidBanner from '../app/parts/fluid-banner/FluidBanner';
import MainCarousel from '../../common/components/carousel/MainCarousel';
import Banners from './parts/banners/Banners';
import NewsPreview from './parts/newsPreview/NewsPreview';


interface IProps {

}

interface IState {
    
}

export default class HomePage extends React.Component<IProps, IState> {
    carouselImg: any[];
    newsPreview: any[];
    carouselWidth: number;
    carouselHeight: number;
    fluidBanner: any;
    constructor(props) {
        super(props);
        this.carouselImg = [
            require('./content/img/1_carousel_page.jpg'),
            require('./content/img/2_carousel_page.jpg'),
            require('./content/img/3_carousel_page.jpg'),
            require('./content/img/4_carousel_page.jpg'),
            require('./content/img/5_carousel_page.jpg'),
        ];
        this.carouselWidth = 1920;
        this.carouselHeight = 1024;
        this.newsPreview = [
            {
                date: '24 мая 2018',
                header: 'Программа поддержки образования "Макдональдс"',
                img: require('./content/img/mcdonalds_news_1.jpg')
            },
            {
                date: '24 мая 2018',
                header: 'Программа поддержки образования "Макдональдс',
                img: require('./content/img/mcdonalds_news_2.jpg')
            },
            {
                date: '24 мая 2018',
                header: 'Программа поддержки образования "Макдональдс',
                img: require('./content/img/mcdonalds_news_3.jpg')
            },
            {
                date: '24 мая 2018',
                header: 'Программа поддержки образования "Макдональдс',
                img: require('./content/img/mcdonalds_news_4.jpg')
            }
        ];
        this.fluidBanner = {
            header: 'Работа в Макдональдс',
            text: 'Стабильность и уверенность в завтрашнем дне',
            img: require('./content/img/footer-banner.jpg'),
            buttonText: 'узнать больше'
        };
        
    }

    render() {
        return (
            <div>
                <MainMenu/>
                <MainCarousel images={this.carouselImg} width={this.carouselWidth} height={this.carouselHeight}/>
                <Banners/>
                <NewsPreview news={this.newsPreview}/>
                <FluidBanner banner={this.fluidBanner}/>
                <Footer/>
            </div>
        );
    };
}