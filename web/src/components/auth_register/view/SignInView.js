// const
import { URL } from './../../../const.js'
// libs
import React, { useState } from 'react'
// Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//
//
//
export default function SignInView(props) {
    if(!props.isValid) { console.log('Ошибка заполнения') }
    //
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    //
    const handleToggleVisible = () => {
        setIsVisiblePassword(!isVisiblePassword)
    }
    //
    return (
        <form action={`${URL.BACK_END}/back-end/sign_in.php`} className="form_body">
            <div className="form_row">
                <TextField
                    id="email"
                    name="email"
                    label="Логин"
                    fullWidth={true}
                    variant="outlined"
                    className="form_field"
                />
            </div>
            <div className="form_row">
                <TextField
                    id="password"
                    className="form_field"
                    variant="outlined"
                    type={isVisiblePassword ? 'text' : 'password'}
                    label="Пароль"
                    fullWidth={true}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                aria-label="Toggle password visibility"
                                onClick={handleToggleVisible}
                                >
                                {isVisiblePassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />
            </div>
            <Button 
                id="submit"
                type="submit"
                name="submit"
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={props.submit}
            >Войти</Button>
        </form>
    )
}