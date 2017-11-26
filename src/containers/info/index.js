import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {fetch} from '../../actions';

import './style.css'

class Info extends Component {

    renderOrganizations(organization) {
        return (
            <tr>
                <th>
                    <td>{organization.org}</td>
                    <td>{organization.date}</td>
                    <td>{organization.qua}</td>
                </th>
            </tr>
        )
    }

    render ( ) {
        const {info} = this.props;
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
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
                    {
                        Object.keys(info.organizations).map((org, index) => ( 
                            <div key={index}>
                                {this.renderOrganizations(org)}
                            </div>
                        ))
                    }
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        info: state.info
    }
};
  
const mapDispatchToProps = {fetch};
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);
