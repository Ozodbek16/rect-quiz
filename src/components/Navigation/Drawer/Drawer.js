import React, { Component } from 'react'
import classes from './Drawer.module.css'
import { Link } from 'react-router-dom'

const Links = [
    { text: 'Auth', to: '/auth' },
    { text: 'Home', to: '/' },
    { text: 'Quiz list', to: '/quiz' },
]

export default class Drawer extends Component {
    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {Links.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link to={link.to}>{link.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
