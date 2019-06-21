import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PendingListGroupItem from "./PendingListGroupItem";
import ApprovedListGroupItem from "./ApprovedListGroupItem";

class ListGroup extends Component {
    constructor(props) {
        super (props);

        this.state = { listGroupItem: ''}
    }

    componentDidUpdate (prevProps) {

        if (prevProps.data !== this.props.data) {
            let listGroupItem = this.props.data.map ((value, index) => {

                if (this.props.type === 'Pending') {
                    const {content, created_at, _id} = value;
                    return (
                        <PendingListGroupItem text={content} time={created_at} key={index} id={_id}/>
                    )
                }
                else if (this.props.type === 'Approved') {
                    const {action_by, tags, content, updated_at, _id} = value;
                    return (
                        <ApprovedListGroupItem
                            tags={tags}
                            action_by={action_by}
                            text={content}
                            time={updated_at}
                            key={index}
                            id={_id}
                        />
                    )

                }


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
    data: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['Pending', 'Approved', 'Reject']).isRequired
};

ListGroup.defaultProps = {
    data: []
};