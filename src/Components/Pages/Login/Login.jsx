import React, { useContext } from "react";
import './Login.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Context} from '../../Context/Authication'

function Login() {
    const {setToken} = useContext(Context)

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const {user_mail, user_password} = evt.target.elements

        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(
                {
                    email: user_mail.value.trim(),
                    password: user_password.value.trim()
                }
            )
        })
        .then(response => response.json())
        .then(data => setToken(data?.token))

    }

    return <div className="login">
        <div className="login--inner">
            <form onSubmit={handleSubmit}>
                <TextField
                    helperText="Please enter your email"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    defaultValue={'eve.holt@reqres.in'}
                    name="user_mail"
                    type={'email'}
                    sx={{ mb: 3 }}
                />

                <TextField
                    helperText="Please enter your password"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    defaultValue={"cityslicka"}
                    name="user_password"
                    type={'password'}
                    sx={{ mb: 3 }}
                />

                <Button variant="contained" type="submit">Contained</Button>
            </form>
        </div>
        
    </div>
}

export default Login;