import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {fetch} from '../../actions';

import './style.css'

const data = {
    name : "Пётр",
    1: {"org": "МФТИ", "date": "2010-2014", "qua": "Бакалавриат" },
    2: {"org": "ВШЭ", "date": "2015-2017", "qua": "Магистратура" },
    3: {"org": "Вуз-шмуз", "date": "2014-2017", "qua": "Доп курсы-шмурсы" }
  };

function isRow(data, item) { 
    if (item !== 'name') {
        return (
            <tr>
            <th scope="row">{item}</th>
            <td>{data[item].org}</td>
            <td>{data[item].date}</td>
            <td>{data[item].qua}</td>
            </tr>
        )
    }
}

class Info extends Component {

    componentDidMount() {
        const {} = this.props;
        fetch();
    };

    render ( ) {
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
                        <th colSpan='4' className="table-head">{data.name}</th>
                        </tr>
                        <tr>
                        <th>#</th>
                        <th>Организация</th>
                        <th>Даты</th>
                        <th>Квалификация</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(data).map((item) => (
                            isRow(data, item)
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
    return {}
};
  
const mapDispatchToProps = {fetch};
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);
