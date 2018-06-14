import * as React from 'react';
import * as _ from 'lodash';

import {Carousel} from 'react-bootstrap';

import './MainCarousel.scss';

interface IProps {
    images: any;
    width: number;
    height: number;
}

interface IState {

}

export default class MainCarousel extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
            <Carousel interval={null} controls={false}>
                {this.renderCarouselItems()}
            </Carousel>
        );
    };
    
    renderCarouselItems() {
         return _.map(this.props.images, (element, index) =>{
            return (
                <Carousel.Item key={index}>
                    <img width={this.props.width} height={this.props.height} alt="900x500" src={element} />
                </Carousel.Item>
            )
        })
    }
    
}