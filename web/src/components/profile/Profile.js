// libs
import React from 'react'
//
import ProfileView from './view/ProfileView'
import Cookies from '../../Cookies';
//
//
//
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    //
    logOut() {
        let cookie = new Cookies()
        cookie.removeCookies()
    }
    //
    render() {
        return (
            <ProfileView logOut={this.logOut}/>
        )
    }
}
//
export default Profile