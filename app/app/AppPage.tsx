import HomePage from '../home/HomePage';
import * as React from 'react';

import '../../common/libs/bootstrap/js/bootstrap.js';
import '../../common/libs/bootstrap/css/bootstrap.css';
import '../../common/libs/bootstrap/css/bootstrap-theme.css';
import './styles/AppPage.scss';

export default class AppPage extends React.Component {
    render() {
        return (
            <HomePage/>
        );
    }
}