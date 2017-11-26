import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Return from '../return';

class Complete extends Component {

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Return/>
                    </div>
                </div>
                <div className="row">
                 <div className="col-md-2"></div>
                 <div className="col-md-8">
                     <div style={{marginTop: '100px'}}>
                    <h2>Ваш запрос успешно отправлен</h2>
                    </div>
                    <div>
                        <Link to='/request/1'>
                            <button className='btn'>Ввести новый запрос</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
        )
    };
};

export default Complete;
