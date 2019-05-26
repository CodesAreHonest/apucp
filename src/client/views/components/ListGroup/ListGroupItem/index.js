import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isToday, dayMonthFormat, twelveHoursClock } from "../../../../helpers/time";

import "./ListGroupItem.css";

class ListGroupItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            show: false,
        };

        this._onClick = this._onClick.bind(this);
    }

    componentDidMount() {

        let date = dayMonthFormat(this.props.time);

        if (isToday(this.props.time)) {
            date = twelveHoursClock(this.props.time);
        }

        this.setState({date});
    }

    _onClick() {
        this.setState({show: !this.state.show});
    }

    render() {
        const {text} = this.props;
        const {date, show} = this.state;

        const fullMessage = show ? 'show' : '';
        const shortMessage = show ? 'd-none' : '';
        const chevronIcon = show ? 'down': 'up';
        const active = show ? 'active' : '';

        return (
            <li style={{padding: '5px 15px', borderBottom: '1px solid #e4e2e2', listStyleType: 'none', cursor: 'pointer'}}
                className={`confession-content ${active}`}
            >
                <div className="row">
                    <div className="col-sm-1 ">
                        <input type="checkbox" style={{zoom: '1.5', marginRight: '15px'}}/>
                    </div>
                    <div className="col-sm-8" style={{color: '#000000c7'}}
                         onClick={this._onClick}
                    >
                        <div className={`confession-text ${shortMessage}`}>
                            { text }
                        </div>

                        <div className={`collapse ${fullMessage}`}>
                            { text }
                        </div>
                    </div>

                    <div className="col-sm-3 text-right"
                         onClick={this._onClick}
                    >
                        {text.length >= 50 && <i className={`fa fa-chevron-${chevronIcon}`} style={{marginRight: '10px'}}/>}
                        <span style={{fontWeight: 'bold'}}>{ date }</span>
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