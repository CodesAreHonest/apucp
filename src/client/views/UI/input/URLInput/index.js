import React, { Component } from 'react';
import PropTypes from 'prop-types';

class URLInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { placeholder, ariaLabel, ariaDescribedBy, className, style, value, onChange, name } = this.props;

        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{borderRadius: 'unset'}}>
                        <i className="fa fa-link" />
                    </span>
                </div>
                <input type="text"
                       name={name}
                       className={`form-control form-control-sm ${className}`}
                       placeholder={placeholder}
                       aria-label={ariaLabel}
                       aria-describedby={ariaDescribedBy}
                       style={style}
                       onChange={onChange}
                       value={value}
                />
                { value.length !== 0 &&
                <div className="input-group-append">
                    <button type="button" className="btn btn-sm btn-secondary" style={{borderRadius: 'unset'}}>
                        <i className="fa fa-trash" />
                    </button>
                </div> }
            </div>
        )
    }
}

export default URLInput;

URLInput.propTypes = {
    placeholder: PropTypes.string,
    ariaLabel: PropTypes.string,
    ariaDescribedBy: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};