import React from 'react'
import $ from 'jquery'
// Material-UI
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//
import { URL } from './../../const.js' 
//
const useStyles = makeStyles(theme => ({
    button: {
      fontSize: '20px',
      fontWeight: 700
    },
    wrongField: {
        borderColor: 'red',
    }
}))
// 
export default function Form() {
    const classes = useStyles();
    //
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    })
    //
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }
    //
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    }
    //
    function handleClick(e) {
        const login    = document.getElementById('login').value.trim()
        const password = document.getElementById('password').value.trim()
        //
        if(login.length !== 0 || password.length !== 0) {
            $.ajax({
                url: `${URL.signIn}ajax/sign-in`,
                type: "POST",
                data: {
                    login,
                    password
                },
                success: data => {
                    console.log(data);
                }
            })
        }
    }
    //
    return (
        <Box className="form" boxShadow={3}>
            {/* Top panel */}
            <div className="form_top">
                <div className="form_btn form_active_btn">
                    <p className="form_label">Вход</p>
                </div>
                <div className="form_btn">
                    <p className="form_label">Регистрация</p>
                </div>
            </div>
            {/* Form body */}
            <div className="form_body">
                <div className="form_row">
                    <TextField
                        id="login"
                        label="Логин"
                        fullWidth={true}
                        variant="outlined"
                        className={classes.wrongField}
                    />
                </div>
                <div className="form_row">
                    <TextField
                        id="password"
                        className=""
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={values.password}
                        fullWidth={true}
                        onChange={handleChange('password')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                edge="end"
                                aria-label="Toggle password visibility"
                                onClick={handleClickShowPassword}
                              >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                    />
                </div>
                <Button 
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth={true}
                    onClick={handleClick}
                >Войти</Button>
            </div>
        </Box>
    )
}

