import React, { Component } from 'react'
import MenuToggle from '../../components/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import classes from './Layout.module.css'

export default class Layout extends Component {
    state = {
        isOpen: false
    }

    onToggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer isOpen={this.state.isOpen} />
                <MenuToggle isOpen={this.state.isOpen} onToggle={this.onToggleHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
