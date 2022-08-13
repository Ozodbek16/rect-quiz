import React from 'react'
import classes from './Button.module.css'

export const Buttun = (props) => {
    const cls = [classes.Button]

    if (props.type) {
        cls.push(classes[props.type])
    }
    return (
        <button className={cls.join(' ')} onClick={props.onRetry}>{props.children}</button>
    )
}
