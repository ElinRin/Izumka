import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {getData} from '../../actions';

import './style.css';

class Info extends Component {
    componentDidMount() {
        this.props.getData("");
    }

    renderOrganizations(organizations) {
        let values = [];
    
        for(let org in organizations) {
            values.push(organizations[org]);
        };

        return (
            values.map((value, index) =>  (
                        <tr key={index}>
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
        <div className="div-center" style={{marginTop: '50px'}}>
        <h2>{info.name}</h2>
        <table className="table mytable">
            <thead>
                <tr>
                <th>Организация</th>
                <th>Даты</th>
                <th>Квалификация</th>
                </tr>
            </thead>
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
                <div className="col-md-12">
                {info.organizations && this.renderFields()}
                </div>
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
