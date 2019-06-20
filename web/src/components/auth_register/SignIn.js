// const
import { URL } from './../../const.js'
// libs
import React from 'react'
import $ from 'jquery'
// components
import SignInView from './view/SignInView'
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
            success: data => {
                console.log(data)
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

