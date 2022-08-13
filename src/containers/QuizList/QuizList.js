import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { Link } from 'react-router-dom'

export default class QuizList extends Component {
    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Quiz list</h1>
                <ul>
                    <li>
                        <Link to="/quiz/1">Quiz 1</Link>
                    </li>
                    <li>
                        <Link to="/quiz/2">Quiz 2</Link>
                    </li>
                    <li>
                        <Link to="/quiz/3">Quiz 3</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
