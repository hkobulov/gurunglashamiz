import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function SimpleAccordion() {
    const [user, setUser] = React.useState([])


    React.useEffect(() => {
        (async () => {
            let response = await fetch('https://reqres.in/api/users');
            let data = await response.json();
            
            if(data?.data?.length > 0){
                setUser(data.data)
            }
        })()
    }, [])

    console.log(user);

  return (
    <div>
        {user.length > 0 && user.map((row) => 
        
            <Accordion key={row.id} square={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{row.first_name} {row.last_name}</Typography>
            </AccordionSummary>
             <AccordionDetails>
                <AccordionDetails sx={{ alignItems: 'center' }} className='d-flex mb-3'>
                       <Avatar className="me-3" sx={{ borderRadius: '50%'}, { width: 100, height: 100 }} src={row.  avatar} sizes='200px' />

                       <div>
                         <Typography>
                               {row.first_name} {row.last_name}
                            </Typography>

                            <a href={"mailto:" + row.email}>{row.email}</a>
                     </div> 
                  </AccordionDetails>

                  <NavLink to={'/profile/' + row.id}>
                    More
                  </NavLink>
                </AccordionDetails>
          </Accordion>
        )}
      
    </div>
  );
}