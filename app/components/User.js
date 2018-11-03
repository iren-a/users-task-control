import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    render() {
        return(
            <li className='user'>
                <Link to={`/user/${this.props.user.id}/todos`}>
                    <div className='user__name'>{this.props.user.name}</div>
                    <div className='user__email'>{this.props.user.email}</div>
                    <div className='user__phone'>{this.props.user.phone}</div>
                </Link>
            </li>

        )

    }
}