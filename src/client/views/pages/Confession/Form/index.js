import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BatchImageUpload from "../../../UI/BatchImageUpload";
import URLInput from "../../../UI/input/URLInput";
import {confirmation, error, loading, success} from "../../../UI/sweetalert2";
import { connect } from 'react-redux';

import {postSubmitConfession} from "../../../../state/ducks/confession/actions";
import {imageDivisionStatusSelector} from "../../../../state/ducks/image/selectors";

class ConfessionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confession: '',
            url: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({confession: e.target.value});
    }

    async onSubmit(e) {
        e.preventDefault();

        let form = document.getElementById('confession-form');

        if (!form.checkValidity()) {
            return false;
        }

        e.target.blur();

        let confirmSubmit = await confirmation('Are you sure?', 'Confession submitted cannot be reverted');

        if (!confirmSubmit) { return false; }

        const { confession } = this.state;
        this.props.postSubmitConfession (confession);

        let confessionDOM = document.getElementById("confession");
        confessionDOM.focus();

        loading('Submitting ... ')

    }

    componentWillReceiveProps (nextProps) {

        if (this.props.response !== nextProps.response) {
            const { response_code } = nextProps.response;

            if (response_code !== 200) {
                const { response_detail } = nextProps.response;
                error ('Your confession submitted unsuccessful', response_detail[0]);
            }
            else {
                success('Success', 'Your confession submitted successfully.');
            }

            this.setState({confession: ''});

        }
    }

    render() {

        const { displayURLInput, displayImageDiv } = this.props;
        const { confession, url } = this.state;

        return (
            <form id="confession-form" onSubmit={this.onSubmit}>

                <div className="row">
                    <div className={displayImageDiv ? "col-md-9" : "col-md-12" }>
                        <textarea
                            id="confession"
                            className="form-control text-area"
                            placeholder="Confess Here ..."
                            onChange={this.onChange}
                            value={confession}
                            spellCheck
                            required
                        />
                    </div>

                    <div className={displayImageDiv ? "col-md-3" : "d-none"}>
                        <div className="image-area">
                            <BatchImageUpload />
                        </div>
                    </div>
                </div>

                <div className="mt-1">
                    {displayURLInput &&
                    <URLInput
                        placeholder="https://sample.image.com"
                        className="button-upload"
                        value={url}
                        onChange={e => this.setState({url: e.target.value})}
                    />
                    }
                </div>

                <div className="row">
                    <div className="col-md-4 offset-md-4 text-left mt-3">
                        <button className="btn button btn-primary btn-block pointer-cursor"
                                type="submit"
                                disabled={confession.length <= 10}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}

const mapStateToProps = state => {
    const response = state.confession.submit_confession_response;

    return {
        response
    }
};

const mapDispatchToProps = {
    postSubmitConfession
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfessionForm);

ConfessionForm.propTypes = {
    postSubmitConfession: PropTypes.func.isRequired,
    response            : PropTypes.object.isRequired,

    displayImageDiv     : PropTypes.bool.isRequired,
    displayURLInput     : PropTypes.bool.isRequired
};