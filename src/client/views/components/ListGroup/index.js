import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PendingListGroupItem from "./PendingListGroupItem";
import ApprovedListGroupItem from "./ApprovedListGroupItem";
import RejectedListGroupItem from "./RejectedListGroupItem";

class ListGroup extends Component {
    constructor(props) {
        super (props);

        this.state = { listGroupItem: ''}
    }

    componentDidUpdate (prevProps) {

        if (prevProps.data !== this.props.data) {
            let listGroupItem = this.props.data.map ((value, index) => {

                if (this.props.type === 'Pending') {
                    const {content, created_at, _id, images} = value;
                    return (
                        <PendingListGroupItem
                            text={content}
                            time={created_at}
                            key={index}
                            id={_id}
                            images={images}
                        />
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
                else if (this.props.type === 'Rejected') {
                    const {action_by, tags, content, updated_at, _id} = value;
                    return (
                        <RejectedListGroupItem
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
        const { listGroupItem } = this.state;
        return (
            <ul className="list-group list-group-flush">
                { listGroupItem }
            </ul>
        )
    }
}

export default ListGroup;

ListGroup.propTypes = {
    data: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['Pending', 'Approved', 'Rejected']).isRequired
};

ListGroup.defaultProps = {
    data: []
};