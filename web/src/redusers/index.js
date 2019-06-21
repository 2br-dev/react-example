import { combineRedusers } from 'redux'
import user from './redusers/user'
//
export default combineRedusers({
    user
})