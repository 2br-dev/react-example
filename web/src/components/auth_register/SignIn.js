// const
import { URL } from './../../const.js'
// cookise
import Cookies from './../../Cookies'
// libs
import React from 'react'
import $ from 'jquery'
// components
import SignInView from './view/SignInView'
import { connect } from 'react-redux'
//
// 
// 
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isValid: true
        } 
    }
    //
    submit(event) {
        event.preventDefault()
        //
        const email    = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()
        //
        if(email.indexOf('@') === -1 || password === '') {
            this.setState({isValid: false})
            return;
        }
        // 
        $.ajax({
            url: `${URL.BACK_END}back_end/sign_in.php`,
            type: 'POST',
            data: { email, password },
            success: responce => {
                if(!isNaN(Number(responce))) {
                    // 
                    let cookie = new Cookies()
                    cookie.setCookies('userId', responce)                    
                    window.location.href = `${URL.HOME}profile`
                    // 
                } else {
                    console.log(responce)
                }
            }
        })

    }
    // 
    render() {
        return (
            <SignInView submit={this.submit.bind(this)} isValid={this.state.isValid} />
        )
    }
}
//
export default SignIn

