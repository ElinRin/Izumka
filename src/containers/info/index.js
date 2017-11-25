import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {fetch} from '../../actions';

import './style.css'

class Info extends Component {

    componentDidMount() {
        const {} = this.props;
        fetch();
    };

    render () {
        return (
            <div className="container">
                <div className="row">
                 <div className="col-md-3"></div>
                 <div className="col-md-6">
                    
                </div>
                <div className="col-md-3"></div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {}
};
  
const mapDispatchToProps = {fetch};
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);
