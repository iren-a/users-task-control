import React from 'react';
import User from './User';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div>Error: {this.state.error.message}</div>
            );
        } else if (!this.state.isLoaded) {
            return (
                <div>Loading...</div>
            );
        } else {
            return(
                <div className='user-list'>
                    <h1 className='user-list__header'>User list</h1>
                    <ul>
                        {this.state.users.map(user => (
                            <User user={user} key={user.id}/>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}