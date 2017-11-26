import React, { Component } from 'react';
import {connect} from 'react-redux'
import classNames from 'classnames';

import {
    getData,
    postData
} from '../../actions';

const validateRequire = value => !value;

class Complite extends Component {
    constructor() {
        super();

        this.state = {
          idIn: '',
          organization: '',
          qualifications: ''
        };
    };

    // formClear() {
    //     this.setState({
    //         idIn: '',
    //         organization: '',
    //         qualifications: ''
    //     });
    // };
    //
    // validationsForm() {
    //     let status = true;
    //
    //     Object.keys(this.state).forEach(item => {
    //         if (validateRequire(this.state[item])) {
    //         status = false;
    //         return false;
    //         }
    //     });
    //
    //     return status;
    // };
    //
    // handleSubmit = event => {
    //     event.preventDefault();
    //
    //     const {type} = this.props.params;
    //
    //     if (+type) {
    //         if (!this.validationsForm()) {
    //             return;
    //         }
    //         this.props.postData(this.state);
    //     } else {
    //         if (validateRequire(this.state.idIn)) {
    //             return;
    //         }
    //         this.props.postData(this.state.idIn);
    //     }
    //
    //     this.formClear();
    // };
    //
    // handleInputChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };
    //
    // renderFields() {
    //     return (
    //         <div>
    //             <div>
    //                 <select
    //                     className="myinput"
    //                     name="organization"
    //                     onChange={this.handleInputChange}>
    //                     <option>Выберите организацию</option>
    //                     <option>МФТИ</option>
    //                     <option>МГУ</option>
    //                     <option>МИСиС</option>
    //                 </select>
    //             </div>
    //             <div>
    //                 <select
    //                     className="myinput"
    //                     name="qualifications"
    //                     onChange={this.handleInputChange}>
    //                     <option>Выберите квалификацию</option>
    //                     <option>Бакалавриат</option>
    //                     <option>Магистратура</option>
    //                     <option>Аспирантура</option>
    //                 </select>
    //             </div>
    //         </div>
    //     )
    // }

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

export default connect(mapStateToProps, mapDispatchToProps)(Complite);
