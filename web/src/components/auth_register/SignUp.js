// const
import { URL } from './../../const.js'
// libs
import React from 'react'
import $ from 'jquery'
import { withSnackbar } from 'notistack';
// components
import SignUpView from './view/SignUpView'
import SignUpCompleteView from './view/SignUpCompleteView'
//
// 
// 
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            registerComplete: false
        } 
    }
    //
    resetForm() {
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('dublePassword').value = ''
        this.setState({registerComplete: true})
    }
    //
    submit(event) {

        event.preventDefault()
        //
        const email         = document.getElementById('email').value.trim()
        const password      = document.getElementById('password').value.trim()
        const dublePassword = document.getElementById('dublePassword').value.trim()
        //       
        let isValid = true
        //
        if(email.indexOf('@') === -1) {
            this.props.enqueueSnackbar('Не корректный email', {
                variant: 'error',
                autoHideDuration: 2000,
            });
            isValid = false
        }
        if(password === '') {
            this.props.enqueueSnackbar('Не корректный пароль', {
                variant: 'error',
                autoHideDuration: 2000,
            });
            isValid = false
        }
        if(password !== dublePassword) {
            this.props.enqueueSnackbar('Пароли не совпадают', {
                variant: 'error',
                autoHideDuration: 2000,
            });
            isValid = false
        }        
        // 
        if(isValid) {
            $.ajax({
                url: `${URL.BACK_END}back_end/sign_up.php`,
                type: 'POST',
                data: { email, password, dublePassword },
                success: data => {
                    if(Number(data) === 1) {
                        this.resetForm()
                    } else if(Number(data) === 0) {
                        this.setState({isValid: false})
                        this.setState({busyEmail: true})
                        this.props.enqueueSnackbar('Пользователь с таким email уже существует', {
                            variant: 'error',
                            autoHideDuration: 2000,
                        });
                    } else {
                        console.log(data)
                    }
                }
            })
        }
    }
    // 
    render() {
        return (
            this.state.registerComplete ? <SignUpCompleteView /> : <SignUpView submit = {this.submit.bind(this)} />  
        )
    }
}
//
export default withSnackbar(SignUp)