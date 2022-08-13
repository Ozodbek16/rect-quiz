import React, { Component } from 'react'
import classes from './Auth.module.css'

export default class Auth extends Component {
    state = {
        users: [],
        countUser: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
            .catch(err => console.log(err))
    }

    onViewUsersHandler = () => {
        const count = 3
        const start = 0
        this.setState({
            countUser: this.state.users.splice(start, (count)),
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <h1>Auth</h1>
                <div>
                    <button onClick={this.onViewUsersHandler}>View users</button>
                </div>
                <ul>
                    {this.state.countUser.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
