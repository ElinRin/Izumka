import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Link} from 'react-router';
import R from 'ramda';

import Info from '../info'

import './style.css';

import {
    getData,
    postData,
    postAndGetData
} from '../../actions';

const validateRequire = value => !value;

class Layout extends Component {
    constructor() {
        super();
    
        this.state = {
            data: {
                idIn: '',
                organization: '',
                qualifications: ''
            },
            clickButton: false
        };
    };
    
    formClear() {
        this.setState( {
            data: {
                idIn: '',
                organization: '',
                qualifications: ''
            },
            clickButton: true
        });
    };
    
    validationsForm() {
        let status = true;

        Object.keys(this.state.data).forEach(item => {
            if (validateRequire(this.state.data[item])) {
            status = false;
            return false;
            }
        });

        return status;
    };

    handleSubmit = event => {
        event.preventDefault();
        
        const {type} = this.props.params;

        if (+type) {
            if (!this.validationsForm()) {
                return;
            }
            this.props.postData(this.state.data, '/complete');
        } else {
            if (validateRequire(this.state.data.idIn)) {
                return;
            }
            this.props.postAndGetData(this.state.data.idIn);
        }
        
        this.formClear();
    };

    handleInputChange = event => {
        this.setState(R.merge(
            this.state,
            { data: R.merge(this.state.data,  { [event.target.name]: event.target.value})}
        ));
    };

    renderFields1() {
        return (
            <div> 
                <div className="myinput">
                    <select
                        className="myselector"
                        name="organization"
                        onChange={this.handleInputChange}>
                        <option>Выберите организацию</option>
                        <option>МФТИ</option>
                        <option>МГУ</option>
                        <option>МИСиС</option>
                    </select>
                </div>
                <div className="myinput">
                    <select
                        className="myselector"
                        name="qualifications"
                        onChange={this.handleInputChange}>
                        <option>Выберите квалификацию</option>
                        <option>Бакалавриат</option>
                        <option>Магистратура</option>
                        <option>Аспирантура</option>
                    </select>
                </div>
                <button
                    className="mybutton"
                    type="submit"
                    onClick={this.handleSubmit}>
                    Отправить
                </button>
            </div>
        )
    }

    
    renderFields2() {
        return (
            <div>
                <div> 
                    <button
                        className="mybutton"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Получить информацию
                    </button>
                </div>
                <div>
                    {this.state.clickButton && <Info/>}
                </div>
            </div>
        )
    }

    render () {
        const {type} = this.props.params;
        return (
            <div className="container">
                <div className="row">
                 <div className="col-md-3"></div>
                 <div className="col-md-6">
                    <h2>Запрос</h2>
                    <form className="div-center" onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                className="myinput"
                                placeholder="Ваш id"
                                value={this.state.data.idIn}
                                name="idIn"
                                onChange={this.handleInputChange}>
                            </input>
                        </div>
                        {+type ? this.renderFields1() : this.renderFields2()}
                            
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
  
const mapDispatchToProps = {
    postData,
    postAndGetData
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
