import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    _onClick() {
        console.log('this', this)
    }

    render() {
        return(
            <li className='user' onClick={this._onClick.bind(this)}>
                <div className='user__name'>{this.props.user.name}</div>
                <div className='user__email'>{this.props.user.email}</div>
                <div className='user__phone'>{this.props.user.phone}</div>
            </li>

        )

    }
}