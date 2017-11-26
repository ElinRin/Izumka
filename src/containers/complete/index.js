import React, { Component } from 'react';
import {connect} from 'react-redux'
import classNames from 'classnames';

import {
    getData,
    postData
} from '../../actions';

const validateRequire = value => !value;

class Complete extends Component {
    constructor() {
        super();

        this.state = {
          idIn: '',
          organization: '',
          qualifications: ''
        };
    };

    render () {
        const {type} = this.props.params;
        return (
            <div className="container">
                <div className="row">
                 <div className="col-md-2"></div>
                 <div className="col-md-8">
                     <div style={{marginTop: '100px'}}>
                    <h2>Ваш запрос успешно отправлен</h2>
                    </div>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = {
    postData
};

export default connect(mapStateToProps, mapDispatchToProps)(Complete);
