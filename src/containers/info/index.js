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
                        <div key={index}>
                            <h3>{value.org}</h3>
                            <div>
                                <h4>{value.date}&nbsp; {value.qua}</h4>
                            </div>
                        </div>
            ))
        )
    }

    renderFields() {

    const {info} = this.props;
    return (
        <div className="div-center">
        <h2>{info.name}</h2>
            {info.organizations && this.renderOrganizations(info.organizations)}
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
