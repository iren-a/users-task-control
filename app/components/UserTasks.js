import React from 'react';

export default class UserTasks extends React.Component {
    render() {
        console.log('props', this.props.match.params);
        return (
            <div>tasks</div>
        )

    }
}