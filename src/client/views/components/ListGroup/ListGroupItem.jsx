import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListGroupItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, time} = this.props;

        return (
            <li style={{padding: '7px', borderBottom: '1px solid #e4e2e2', listStyleType: 'none'}}>
                <div className="row">
                    <div className="col-md-10">
                        <span className="btn btn-sm btn-default">
                            <input type="checkbox" style={{zoom: '1.5'}}/>
                        </span>
                        <span style={{color: '#00000096'}}>
                            { text }
                        </span>
                    </div>

                    <div className="col-md-2 text-right">
                        { time }
                        <i className="fa fa-chevron-circle-down" style={{marginLeft: '10px'}}/>
                    </div>
                </div>
            </li>
        )
    }
}

export default ListGroupItem;

ListGroupItem.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

ListGroupItem.defaultProps = {
    text: '',
    time: ''
};