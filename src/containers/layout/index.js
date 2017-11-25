import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {fetch} from '../../actions';

import './style.css'

class Layout extends Component {

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
                    <form className="myform">
                        <input className="myinput" placeholder="Your id"></input>
                        <div>
                            <select className="myinput">
                                <option>Choose organization</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div>
                            <select className="myinput">
                                <option>Choose qualification</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button className="mybutton">Отправить</button>
                    </form>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
