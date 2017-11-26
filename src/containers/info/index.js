import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {getData} from '../../actions';

import './style.css'

class Info extends Component {
    componentDidMount() {
        console.log("bly");
        console.log(this.props.info);
        this.props.getData("");
        console.log("bly");
        console.log(this.props.info);
    }

    renderOrganizations(organizations) {
        let values = [];
    
        for(let org in organizations) {
            values.push(org);
        };

        return (
            values.map((value, index) =>  (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.org}</td>
                            <td>{value.date}</td>
                            <td>{value.qua}</td>
                        </tr>
            ))
        )
    }

    renderFields() {

    const {info} = this.props;
    return (
        <div className="div-center">
        <h2>Информация о квалификации</h2>
        <table className="table table-hover mytable">
            <thead>
                <tr>
                <th colSpan='4' className="table-head">{info.name}</th>
                </tr>
                <tr>
                <th>#</th>
                <th>Организация</th>
                <th>Даты</th>
                <th>Квалификация</th>
                </tr>
            </thead>
            <h2>{info.name}</h2>
            <tbody>
                    {info.organizations && this.renderOrganizations(info.organizations)}
            </tbody>
            </table>
        </div>
    )
    }

    render ( ) {
        const {info} = this.props;
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                {info.organizations && this.renderFields()}
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
    )
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {
        info: state.info
    }
};
  
const mapDispatchToProps = {getData};
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);
