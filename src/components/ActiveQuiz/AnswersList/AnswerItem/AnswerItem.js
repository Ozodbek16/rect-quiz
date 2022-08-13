import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
    const cls = [classes.AnswerItem]
    
    if (props.classState === 'success') {
        cls.push(classes.success)
    } else if (props.classState === 'error') {
        cls.push(classes.error)
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={props.onAnswerClick.bind(this, props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem