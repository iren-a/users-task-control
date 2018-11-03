import React from 'react';
import User from './User';
import {connect} from 'react-redux';
import {getUsersLoading, getUsers, getUsersError} from './../selectors/getUsersSelectors';
import {getUsersRequest} from './../actions/processUsers';

class UserList extends React.Component {
    render() {
        if (this.props.error) {
            return (
                <div>Error: {this.props.error.message}</div>
            );
        } else if (!this.props.isLoaded) {
            return (
                <div>Loading...</div>
            );
        } else {
            return(
                <div className='user-list'>
                    <h1 className='user-list__header'>User list</h1>
                    <ul>
                        {this.props.users.map(user => (
                            <User user={user} key={user.id}/>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    componentDidMount() {
        this.props.getUsersRequest('users');
    }
}

const mapStateToProps = (state) => ({
    isLoaded: getUsersLoading(state),
    users: getUsers(state),
    error: getUsersError(state),
});

const mapDispatchToProps = {
    getUsersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);