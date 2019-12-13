import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


  
class Login extends Component {
   
    render() {

        return(
            <div className="loginPage">
                  <Grid container spacing={0}  justify="center" direction="column" >
                        
                        <Grid item xs={6} className="paper">
                            <Card >
                                <CardContent>
                                    <Avatar className="avatar" style={{}}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" align="center">
                                        Sanal Sınav Sistemine Giriş
                                    </Typography>
                                    <form className="form" noValidate>
                                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                                        <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                                            Giriş Yap
                                        </Button>
                                    </form> 
                                </CardContent>
                                
                            </Card>
                        </Grid>

                    </Grid>
            </div>
           
        );
    }
} 

export default Login;

/**
 <Container  maxWidth="xs">
                    <Grid container direction="row" xs={12} className="paper">
                                <Grid xs={6}>
                                    <img src="/assets/images/login-img.png" width="50%"/>
                                </Grid>
                                 <Grid xs={6}>
                                 <Card >
                        <CardContent>
                            <Avatar className="avatar">
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <form className="form" noValidate>
                                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                                        <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                                            Sign In
                                        </Button>
                                    </form> 
                        </CardContent>
                        
                    </Card>
                    
                                    
                                </Grid>
                            </Grid>
                    
                </Container>
 */