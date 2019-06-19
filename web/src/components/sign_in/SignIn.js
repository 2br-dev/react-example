import React from 'react'
// css
import './SignIn.css';
// components
import Form  from './Form'
import Header  from './Header'
// Material UI
import Box from '@material-ui/core/Box';
// 
// 
// 
function SingIn() {
    return (
        <Box component="main" className="main" bgcolor="">
            <Header/>
            <Form/>
        </Box>
    )
}
// 
export default SingIn

