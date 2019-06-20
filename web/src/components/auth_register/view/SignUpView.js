// const
import { URL } from './../../../const.js'
// libs
import React from 'react'
// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//
//
//
export default function SignUpView(props) {
    //
    return (
        <form action={`${URL.BACK_END}/back-end/sign_up.php`} className="form_body" autoComplete="off">
            <div className="form_row">
                <TextField
                    id="email"
                    name="email"
                    label="email"
                    fullWidth={true}
                    variant="outlined"
                    className="form_field"
                />
            </div>
            <div className="form_row">
                <TextField
                    id="password"
                    name="password"
                    className="form_field"
                    variant="outlined"
                    type='password'
                    label="Пароль"
                    fullWidth={true}
                />
            </div>
            <div className="form_row">
                <TextField
                    id="dublePassword"
                    name="dublePassword"
                    className="form_field"
                    variant="outlined"
                    type='password'
                    label="Провторите пароль"
                    fullWidth={true}
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
            >Зарегистрироваться</Button>
        </form>
    )
}