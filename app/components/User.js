import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    render() {
        return(
            <li className='user-list__user'>
                <Link className='user-list__link' to={`/user/${this.props.user.id}/todos`}>
                    <div className='user-list__name'>{this.props.user.name}</div>
                    <div className='user-list__email'>{this.props.user.email}</div>
                    <div className='user-list__phone'>{this.props.user.phone}</div>
                </Link>
            </li>

        )

    }
}