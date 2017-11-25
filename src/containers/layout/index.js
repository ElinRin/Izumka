import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';


import {fetch} from '../../actions';

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
                    <form>
                        <input></input>
                        <input></input>
                        <input></input>
                        <button></button>
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
