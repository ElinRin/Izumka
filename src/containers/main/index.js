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
                        <button className='btn'>Соискатель</button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to='/request/0'>
                        <button className='btn'>Работадатель</button>
                    </Link>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
        )
    };
};

export default Main;
