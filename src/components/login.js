import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{

    const paperStyle={padding:'40px 70px 10px 70px', height:'70vh', width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3cb371'}
    const btnStyle={margin:'30px 0', backgroundColor:'#3cb371', borderRadius: '0'}
    const tfStyle={margin: '15px 0 5px 0'}
    const lnkStyle={margin: '0 0 20px 5px'}
    const hStyle={marginBottom: '10px', fontSize: '32px'}
    const gStyle={marginBottom: '40px'}
    const rfStyle={display: 'flex', justifyContent: 'space-between'}
    const fpStyle={marginTop: '12px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gStyle}>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={hStyle}>Welcome to DataLab</h2>
                    <Typography> What is DataLab?  
                        <Link href="#" style={lnkStyle}>
                            Learn More
                        </Link>
                    </Typography>
                </Grid>
                <TextField id="filled-basic" variant="filled" placeholder='Email Address' fullWidth required/>
                <br/>
                <TextField id="filled-basic" variant="filled" style={tfStyle} placeholder='Password' type='password' fullWidth required/>
                <Grid style={rfStyle}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Link href="#" style={fpStyle}>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid align='center'>
                    <Button type='submit' color='primary' variant="contained" style={btnStyle}>Login</Button>
                    <Typography> Do you have an account?  
                        <Link href="#" style={lnkStyle}>
                            Register Now
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login