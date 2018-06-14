import * as React from 'react';
import * as $ from 'jquery';
import './FluidBanner.scss';

interface IProps {
    banner: any;
}

interface IState {

}

export default class FluidBanner extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="img-banner">
                        <img src={this.props.banner.img}/>
                        <div className="fluid-banner-content">
                            <h3>{this.props.banner.header}</h3>
                            <p>{this.props.banner.text}</p>
                            <button>{this.props.banner.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}