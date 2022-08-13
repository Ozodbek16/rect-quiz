import React from 'react'
import classes from './ActiveQuiz.module.css'
import { AnswersList } from './AnswersList/AnswersList'

export const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <strong>
                    <span>{props.activeQuestion}.</span>&nbsp;
                    {props.question}
                </strong>

                <small>{props.activeQuestion} in {props.quizLength}</small>
            </p>

            <AnswersList
                classState={props.classState}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}
