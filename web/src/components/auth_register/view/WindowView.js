// libs
import React, { useState } from 'react'
// css
import './auth.css'
// components
import SignIn from './../SignIn'
import SignUp from './../SignUp'
// Material UI
import Box from '@material-ui/core/Box'
// 
// 
//
export default function WindowView(props) {
    let [isVisible, setIsVisible] = useState(true)
    //
    const toggleVisible = () => {
        setIsVisible(!isVisible)
    }
    //
    return(
        <Box component="main" className="main" bgcolor="">
            <Box component="div" className="form" boxShadow={3}>
                <div className="form_top">
                    <button onClick={toggleVisible} className={isVisible ? 'form_btn form_btn_active' : 'form_btn'} disabled={isVisible}>Вход</button>
                    <button onClick={toggleVisible} className={!isVisible ? 'form_btn form_btn_active' : 'form_btn'} disabled={!isVisible}>Регистрация</button>
                </div>
                {isVisible ? <SignIn /> : <SignUp />}
            </Box> 
        </Box>
    )
}
