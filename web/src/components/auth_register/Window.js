// const
import { URL } from './../../const.js'
// libs
import React from 'react'
// components
import WindowView from './view/WindowView'
// Material UI
import Cookies from './../../Cookies';
// 
// 
//
class Window extends React.Component {
    //
    constructor(props) {
        super(props) 
        this.state = {

        }
    }
    //
    componentWillUnmount() {
		// let cookie = new Cookies
		
		// console.log(cookie.getCookies())
		// cookie.removeCookies()
		// console.log(cookie.getCookies())
	}
    //
    render() {
        return (
            <WindowView/>
        )
    }
}
// 
export default Window

