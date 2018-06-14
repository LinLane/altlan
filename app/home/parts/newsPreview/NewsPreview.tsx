import * as React from 'react';
import './NewsPreview.scss';
import * as _ from 'lodash';

interface IProps {
    news: any;
}

interface IState {

}

export default class NewsPreview extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderNew()}
                </div>
            </div>
        );
    };
    renderNew() {
        return _.map(this.props.news, (element, index) => {
            return (
                <div className="col-xs-6 news-preview" key={index}>
                    <a href="#">
                        <p>{element.date}</p>
                        <h3>{element.header}</h3>
                        <img src={element.img}/>
                    </a>
                </div>
            )
        })
    }
}