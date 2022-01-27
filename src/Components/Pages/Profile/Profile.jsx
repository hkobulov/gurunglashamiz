import React from "react";
import {useParams, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import './Profile.scss'

function Profile() {
    const {id} = useParams()
    const [user, setUser] = React.useState({})
    const navigate = useNavigate()
    
    React.useEffect(() => {
        (async () => {
            let response = await fetch(`https://reqres.in/api/users/${id}`)
            let data = await response.json()

            if(data?.data){
                setUser(data.data)
            }
        })()
    }, [])

    return <>
        <div className="profile">
        {user && [user].map((row) => 
            <div key={new Date()}>
                <Button onClick={() => navigate(-1)}>
                   Back
                </Button>
               

                <img className="user-pic" src={row.avatar} alt={row.last_name + "'s avatar"} width={250} height={250} />

                <h2 className="user-name">
                    {row.first_name} {row.last_name}
                </h2>

                <a className="user-email" href={'mailto:'+row.email} target={'_blank'}>{row.email}</a>
            </div>    
        )}
    </div>
    </>
}

export default Profile;