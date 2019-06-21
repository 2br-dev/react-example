//
import React, { useState } from 'react'
//
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
import Window from  './components/auth_register/Window' 
import Profile from './components/profile/Profile' 
// 
import { SnackbarProvider } from 'notistack';
import Cookies from './Cookies';
import { URL } from './const.js';

import { connect } from 'react-redux'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}	
		//
		this.url = window.location.toString().replace(URL.HOME, '/')	
		//
		let cookies = new Cookies()
		cookies = cookies.getCookies()
		//
		this.auth = false
		cookies.map(cookie => {
			if(cookie.name === 'userId' && cookie.value > 0) {
				this.auth = true
			}
		})
		//
		if(this.url === '/') {
			if(this.auth) {
				window.location.href = `${URL.HOME}profile`
			}
		} else if(this.url !== '/') {
			if(!this.auth) {
				window.location.href = `${URL.HOME}`
			}
		}
	}
	//
	render() {	
		return (
		<Router>
			<SnackbarProvider maxSnack={3}>
				{this.auth ? <Route path="/profile" component={Profile} /> : <Route path="/" exact  component={Window} />} 
			</SnackbarProvider>
		</Router>
		)
	}
}

export default connect(state => ({ store: state }),
  dispatch => ({
    onFetchUser: user => dispatch({ type: 'FETCH_USER', payload: user }),
    // onFetchFeed: feed => dispatch({ type: 'FETCH_FEED', payload: feed }),
    // onFetchNews: news => dispatch({ type: 'FETCH_NEWS', payload: news }),
    // setUnreadedFeed: count => dispatch({ type: 'UNREADED_FEED', payload: count }),
    // setUnreadedMessages: count => dispatch({ type: 'UNREADED_MESSAGES', payload: count }),
    // onGetNewFeed: type => dispatch({ type: 'NEW_FEED', payload: type }),
}))(App);