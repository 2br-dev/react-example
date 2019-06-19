import React from 'react'
// css
import './SignIn.css'
// components
import { URL } from './../../const.js'
// Material UI
import Box from '@material-ui/core/Box';
// 
// 
// 
function Header() {
    return(
        <Box className="header" component="header" bgcolor="primary.main">
            <a href={URL.home} className="header_title">Header</a>
        </Box>
    )
}
//
export default Header