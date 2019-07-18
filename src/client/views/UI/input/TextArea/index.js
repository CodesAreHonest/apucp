import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.value !== this.props.value) {

        }
    }

    render() {
        const {
            id, name, className, placeholder, onChange, value, spellCheck, required,
            style
        } = this.props;

        return (
            <textarea
                id={id}
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                spellCheck={spellCheck}
                required={required}
                style={style }
            />
        )
    }
}

export default TextArea;

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    spellCheck: PropTypes.bool.isRequired,
    required: PropTypes.bool.isRequired,
    style: PropTypes.object

};