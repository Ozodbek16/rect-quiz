import React from 'react'
import { Buttun } from '../Button/Buttun'
import classes from './FinishedQuiz.module.css'
import { Link } from 'react-router-dom'

export const FinishedQuiz = (props) => {
    let total = 0
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((item, index) => {
                        const cls = ['fa-solid']

                        cls.push(classes[props.results[item.id]])

                        if (props.results[item.id] === 'error') {
                            cls.push('fa-xmark')
                        } else {
                            total = total + 1
                            cls.push('fa-check')
                        }

                        return (
                            <li key={index}><strong>{index + 1}.</strong> &nbsp; {item.question} <i className={cls.join(' ')}></i></li>
                        )
                    })
                }
            </ul>
            <p>{total} currect in {props.quiz.length} questions</p>
            <div>
                <Buttun type='primary' onRetry={props.onRetry}>Retry</Buttun>
                <Buttun type='success'>
                    <Link to='/quiz'>Quiz list</Link>
                </Buttun>
            </div>
        </div>
    )
}
