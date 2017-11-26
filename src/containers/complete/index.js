import React, { Component } from 'react';
import {connect} from 'react-redux'

class Complete extends Component {

    render () {
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

export default Complete;
