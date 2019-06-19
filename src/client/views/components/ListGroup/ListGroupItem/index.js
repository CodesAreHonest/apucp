import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isToday, dayMonthFormat, twelveHoursClock } from "../../../../helpers/time";
import { selectPendingConfession, deselectPendingConfession } from "../../../../state/ducks/confession/actions";
import "./ListGroupItem.css";

class ListGroupItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            show: false,
            selected: false,
        };

        this._onClick = this._onClick.bind(this);
        this._selectConfession = this._selectConfession.bind(this);
    }

    componentDidMount() {

        let date = dayMonthFormat(this.props.time);

        if (isToday(this.props.time)) {
            date = twelveHoursClock(this.props.time);
        }

        this.setState({date});
    }

    componentDidUpdate (prevProps) {
        if (prevProps.pendingList !== this.props.pendingList) {
            const confessionId = this.props.id;
            const selected = this.props.pendingList.find(id => id === confessionId);

            if (selected === undefined || this.props.pendingList.length === 0) {
                this.setState({selected: false});
            }
            else {
                this.setState({selected: true});
            }
        }
    }

    _onClick() {
        this.setState({show: !this.state.show});
    }

    _selectConfession() {
        const confessionId = this.props.id;

        if (this.state.selected) {
            return this.props.deselectPendingConfession(confessionId);
        }

        return this.props.selectPendingConfession(confessionId);
    }

    render() {
        const {text} = this.props;
        const {date, show, selected} = this.state;

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
                        <input type="checkbox"
                               style={{zoom: '1.5', marginRight: '15px'}}
                               onChange={this._selectConfession}
                               checked={selected}
                        />
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

const mapStateToProps = ({ confession }) => {

    return {
        pendingList: confession.pendingList
    }
};

const mapDispatchToProps = {
    selectPendingConfession,
    deselectPendingConfession
};

export default connect(mapStateToProps, mapDispatchToProps)(ListGroupItem);

ListGroupItem.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    id:   PropTypes.string.isRequired,
    pendingList: PropTypes.array.isRequired,

    selectPendingConfession: PropTypes.func.isRequired,
    deselectPendingConfession: PropTypes.func.isRequired
};

ListGroupItem.defaultProps = {
    text: '',
    time: ''
};