import React, { useContext } from "react";
import './Footer.scss';
import Button from '@mui/material/Button';
import {Context} from '../Context/Authication'

function Footer() {
    const {setToken} = useContext(Context)

    return <footer>
        <p className="footer-copyright">
            Copyright 
            <span className="footer-copy">Gurunglashamiz</span>
        </p>

        <Button variant="outlined" color="error" onClick={() => setToken(window.localStorage.removeItem('token'))}>
            Log out
        </Button>
    </footer>
}

export default Footer;