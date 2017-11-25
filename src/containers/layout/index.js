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
          id: '',
          organization: '',
          qualifications: ''
        };
      }
    
      formClear() {
        this.setState({
          id: '',
          organization: '',
          qualifications: ''
        });
      }
    
      validationsForm() {
        let status = true;
    
        Object.keys(this.state).forEach(item => {
          if (validateRequire(this.state[item])) {
            status = false;
            return false;
          }
        });
    
        return status;
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        if (!this.validationsForm()) {
          return;
        }
    
        this.props.postData(this.state);
        this.formClear();
      };
    
      handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    

    render () {
        return (
            <div className="container">
                <div className="row">
                 <div className="col-md-3"></div>
                 <div className="col-md-6">
                    <h2>Запрос</h2>
                    <form className="myform" onSubmit={this.handleSubmit}>
                        <input
                            className="myinput"
                            placeholder="Your id"
                            value={this.state.id}
                            name="id"
                            onChange={this.handleInputChange}>
                        </input>
                        <div>
                            <select
                                className="myinput"
                                name="organization"
                                onChange={this.handleInputChange}>
                                <option>Choose organization</option>
                                <option>МФТИ</option>
                                <option>МГУ</option>
                                <option>МИСиС</option>
                            </select>
                        </div>
                        <div>
                            <select
                                className="myinput"
                                name="qualifications"
                                onChange={this.handleInputChange}>
                                <option>Choose qualification</option>
                                <option>БАКАЛАВРИАТ</option>
                                <option>МАГИСТРАТУРА</option>
                                <option>АСПИРАНТУРА</option>
                            </select>
                        </div>
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
