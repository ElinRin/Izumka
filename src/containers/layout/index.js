import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import './style.css';

import {
    getData,
    postData
} from '../../actions';

const validateRequire = value => !value;

class Layout extends Component {
    constructor() {
        super();
    
        this.state = {
          idIn: '',
          organization: '',
          qualifications: ''
        };
    };
    
    formClear() {
        this.setState({
            idIn: '',
            organization: '',
            qualifications: ''
        });
    };
    
    validationsForm() {
        let status = true;

        Object.keys(this.state).forEach(item => {
            if (validateRequire(this.state[item])) {
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
            this.props.postData(this.state);
        } else {
            if (validateRequire(this.state.idIn)) {
                return;
            }
            this.props.postData(this.state.idIn);
        }
        
        this.formClear();
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    renderFields() {
        return (
            <div> 
                <div>
                    <select
                        className="myinput myselector"
                        name="organization"
                        onChange={this.handleInputChange}>
                        <option>Выберите организацию</option>
                        <option>МФТИ</option>
                        <option>МГУ</option>
                        <option>МИСиС</option>
                    </select>
                </div>
                <div>
                    <select
                        className="myinput myselector"
                        name="qualifications"
                        onChange={this.handleInputChange}>
                        <option>Выберите квалификацию</option>
                        <option>Бакалавриат</option>
                        <option>Магистратура</option>
                        <option>Аспирантура</option>
                    </select>
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
                                placeholder="Your id"
                                value={this.state.idIn}
                                name="idIn"
                                onChange={this.handleInputChange}>
                            </input>
                        </div>
                        {+type ? this.renderFields() : ''}
                        <button
                            className="mybutton"
                            type="submit">
                            Отправить
                        </button>
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
    postData
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
