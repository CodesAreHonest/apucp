import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BatchImageUpload from "../../../UI/BatchImageUpload";
import URLInput from "../../../UI/input/URLInput";
import {confirmation, error, loading, success} from "../../../UI/sweetalert2";
import { connect } from 'react-redux';

import {postSubmitConfession} from "../../../../state/ducks/confession/actions";
import { resetImageUploaded } from "../../../../state/ducks/image/actions";

import axios from 'axios';

class ConfessionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confession: '',
            url: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this._verifyImageUrlValidity = this._verifyImageUrlValidity.bind(this);

    }

    onChange(e) {
        this.setState({confession: e.target.value});
    }

    async onSubmit(e) {
        e.preventDefault();

        this._verifyImageUrlValidity();

        let form = document.getElementById('confession-form');

        if (!form.checkValidity()) {
            return false;
        }

        e.target.blur();

        let confirmSubmit = await confirmation('Are you sure?', 'Confession submitted cannot be reverted');

        if (!confirmSubmit) { return false; }

        let formData = new FormData(form);

        this.props.postSubmitConfession (formData);

        let confessionDOM = document.getElementById("confession");
        confessionDOM.focus();

        loading('Submitting ... ')

    }

    _verifyImageUrlValidity() {

        axios({
            method: 'GET',
            url: this.state.url,
            dataType: 'text',
            config: {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
        }).then (response => {
            console.log (response);
        })

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
                this.props.resetImageUploaded();
                this.setState({confession: ''});
            }


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
                            name="confession"
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
                        name="url"
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
    postSubmitConfession, resetImageUploaded
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfessionForm);

ConfessionForm.propTypes = {
    postSubmitConfession: PropTypes.func.isRequired,
    resetImageUploaded  : PropTypes.func.isRequired,
    response            : PropTypes.object.isRequired,

    displayImageDiv     : PropTypes.bool.isRequired,
    displayURLInput     : PropTypes.bool.isRequired
};