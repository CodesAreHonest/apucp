import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isToday, dayMonthFormat, twelveHoursClock } from "../../../../helpers/time";
import {
    selectPendingConfession,
    deselectPendingConfession,
    setDisplayImage
} from "../../../../state/ducks/confession/actions";
import { openModal } from "../../../../state/ducks/modal/actions";
import "../ListGroupItem.css";

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
        this._openModal = this._openModal.bind(this);
        this._updateTime = this._updateTime.bind(this);
    }

    componentDidMount() {
        this._updateTime();
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

        if (prevProps.time !== this.props.time) {
            this._updateTime();
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

     _openModal() {
        this.props.setDisplayImage(this.props.images);
        this.props.openModal();
     }

     _updateTime() {
         let date = dayMonthFormat(this.props.time);

         if (isToday(this.props.time)) {
             date = twelveHoursClock(this.props.time);
         }

         this.setState({date});
     }

    render() {
        const {text, images} = this.props;
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
                    <div className="col-md-1 col-sm-1 col-6 order-md-1 order-sm-1 order-1">
                        <input type="checkbox"
                               style={{zoom: '1.5', marginRight: '15px'}}
                               onChange={this._selectConfession}
                               checked={selected}
                        />
                    </div>
                    <div className="col-sm-8 col-sm-8 col-12 order-md-2 order-sm-2 order-3" style={{color: '#000000c7'}}
                         onClick={this._onClick}
                    >
                        <div className={`confession-text ${shortMessage}`}>
                            { text }
                        </div>

                        <div className={`collapse ${fullMessage}`}>
                            { text }
                        </div>
                    </div>

                    <div className="col-sm-3 col-sm-3 col-6 order-md-3 order-sm-3 order-2 text-right"
                    >
                        {text.length >= 50 && <i className={`fa fa-chevron-${chevronIcon}`} style={{marginRight: '10px'}}/>}
                        <span style={{fontWeight: 'bold'}}>{ date }</span>

                        {images.length !== 0 &&
                        <i className="fa fa-image"
                           style={{marginLeft: '10px'}}
                           onClick={this._openModal}
                        />
                        }
                    </div>
                </div>

            </li>
        )
    }
}

const mapStateToProps = ({ confession }) => ({
    pendingList: confession.pendingList
});

const mapDispatchToProps = {
    selectPendingConfession,
    deselectPendingConfession,
    openModal, setDisplayImage
};

export default connect(mapStateToProps, mapDispatchToProps)(ListGroupItem);

ListGroupItem.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    id:   PropTypes.string.isRequired,
    pendingList: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,

    selectPendingConfession: PropTypes.func.isRequired,
    deselectPendingConfession: PropTypes.func.isRequired,
    setDisplayImage: PropTypes.func.isRequired,

    openModal: PropTypes.func.isRequired
};

ListGroupItem.defaultProps = {
    text: '',
    time: ''
};