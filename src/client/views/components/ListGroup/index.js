import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from "./ListGroupItem";

class ListGroup extends Component {
    constructor(props) {
        super (props);

        this.state = { listGroupItem: ''}
    }

    componentDidUpdate (prevProps) {

        if (prevProps.data !== this.props.data) {
            let listGroupItem = this.props.data.map ((value, index) => {
                const {content, created_at, _id} = value;
                return (
                    <ListGroupItem text={content} time={created_at} key={index} id={_id}/>
                )
            });

            this.setState({listGroupItem});
        }
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                { this.state.listGroupItem }
            </ul>
        )
    }
}

export default ListGroup;

ListGroup.propTypes = {
    data: PropTypes.array.isRequired
};

ListGroup.defaultProps = {
    data: []
};