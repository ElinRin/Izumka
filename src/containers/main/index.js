import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {

    render () {
        return (
            <div className="container">
                <div className="row">
                 <div className="col-md-2"></div>
                 <div className="col-md-4">
                    <Link to='/request/1'>
                        <button className='mybutton button-big' style={{marginTop: '200px'}}>Подтверждение квалификации</button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to='/request/0'>
                        <button className='mybutton button-big' style={{marginTop: '200px'}}>Посмотреть реестр</button>
                    </Link>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
        )
    };
};

export default Main;
