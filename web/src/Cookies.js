// const
import { URL } from './const.js'
//
export default class Cookies {
    constructor() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() + 2)  
        this.cookies = this.parceCookies()     
    }
    //
    getCookies() {
        return this.cookies
    }
    //
    setCookies(name, value = '', lifetime = this.date) {
        document.cookie = `${name}=${value}; expires=${lifetime}`
    }
    //
    removeCookies() {
        this.cookies.map(cookie => {
            this.setCookies(cookie.name, null) 
        })
    }
    //
    //
    //
    parceCookies() {
        let result = []
        let cookies = document.cookie
        // 
        cookies = cookies.split(';')
        //
        cookies.forEach(cookie => {
            if(cookie.trim() !== '') {
                let couple = cookie.trim().split('=')
                result.push({name: couple[0], value: couple[1]})              
            } 
        })
        return result;
    }
}