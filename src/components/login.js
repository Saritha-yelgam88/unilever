import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import logo from '../static/images/Unilever Logo- blue.svg';

const Login=()=>{
    const containerStyle={width:'100%', height:'100%', backgroundColor:'#F4F5FA', margin: '0', padding:'150px 0px 182px 0px'}
    const paperStyle={padding:'46px 0px 0px 0px', height:569, width:555, marginBottom:"20px"}
    const avatarStyle={borderRadius: 0, height:58, width:52, backgroundSize:'cover'}
    const loginBtnStyle={width:80, height:39, fontSize:'14px', margin:'35px 0px 28px 0px', backgroundColor:'#00B190', borderRadius: '0'}
    const textFieldStyle={width: 403, height: 54, color:'#91969B', margin: '20px 0 0 0'} 
    const linkStyle={margin: '0 0 20px 5px', color:'#0068C1', fontSize:'14px'}
    const headingStyle={marginBottom: '6px', fontSize: '32px', color:'#222222'}
    const gStyle={width:403, marginBottom: '20px'}
    const rfStyle={width:403, marginTop:'12px', fontSize:'14px', display: 'flex', justifyContent: 'space-between', color:'#464443'}
    const fpStyle={marginTop: '12px', color:'#464443', fontSize:'14px'}
    const dlStyle={color:'#73706E', fontSize:'14px'}
    const dhaStyle={color:'#676767', fontSize:'14px'}
    return(
        <Grid align='center' style={containerStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid style={gStyle}>
                    <Avatar style={avatarStyle} src={logo} alt="not found"></Avatar>
                    <h2 style={headingStyle}>Welcome to DataLab</h2>
                    <Typography style={dlStyle}> What is DataLab?  
                        <Link href="#" style={linkStyle}>
                            Learn More
                        </Link>
                    </Typography>
                </Grid>
                <TextField id="filled-basic" variant="filled" placeholder='Email Address' style={textFieldStyle} required/>
                <TextField id="filled-basic" variant="filled" style={textFieldStyle} placeholder='Password' type='password' required/>
                <Grid style={rfStyle}>
                    <FormControlLabel
                        control={
                            <Checkbox name="checkedB" color="primary"/>
                        }
                        label="Remember me"
                    />
                    <Link href="#" style={fpStyle}>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid>
                    <Button type='submit' color='primary' variant="contained" style={loginBtnStyle}>Login</Button>
                    <Typography style={dhaStyle}> Do you have an account?  
                        <Link href="#" style={linkStyle}>
                            Register Now
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login