// const
import { URL } from './../../../const.js'
//
import React from 'react'
// css
import './profile.css'
//
//
//
export default function(props) {
    return (
        <main className="profile">
            <div>
                <p className="profile_title">Welcome!</p>
                <a href={URL.HOME} className="prfile_link" onClick={props.logOut}>Выход</a>
            </div>
        </main>
    )
}