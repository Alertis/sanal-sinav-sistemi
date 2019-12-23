import React, { Component } from 'react';
import { Card, Form, Icon, Input, Button, Spin, Alert, Divider } from 'antd';
import {connect} from 'react-redux'

import {loginCheck} from './action'

class Login extends Component {
    state={
        username: "",
        password: "",
        loading: false,
        reject: false
    }
   handleChange = (e) =>{
       this.setState({[e.target.name]: e.target.value})
   }
   login = () =>{
       if(this.state.username === "" || this.state.password === "" )
           this.setState({error: "Kullanıcı Adı veya şifre boş geçemez!"})
        else
            this.props.loginCheck(this.state.username, this.state.password)
   }
   componentWillReceiveProps(nextState){
       if(nextState.Login){
           this.setState({loading: nextState.Login.loading})
            if(nextState.Login.user.status === 200){
                localStorage.setItem('authorization', nextState.Login.user.data.refresh_token)
                window.location.href="/"
            }else{
                nextState.Login.reject && this.setState({error: "Kullanıcı adı veya şifre yanlış"})
            }  
           
          
       }
   }
    render() {
        return(
            <div className="loginPage">
             {this.state.loading ? 
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} tip="Yükleniyor..." /> :
                    <Card className="wrapCard">
                        <div>
                            <img src="/assets/images/img-01.png" alt="IMG" />
                        </div>
                        <Form>
                            
                            { this.state.error ?
                                <>
                                    <Alert message="HATA !" description={this.state.error} type="error" showIcon/>
                                    <Divider/>
                                </> :
                                <span className="title"> Sisteme Giriş</span>
                            }
                            <Form.Item>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Kullanıcı Adı" name="username" onChange={this.handleChange} value={this.state.username}/>
                            </Form.Item>

                            <Form.Item>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                        type="password" placeholder="Şifre" name="password" onChange={this.handleChange} value={this.state.password}/>
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>
                                    Giriş Yap
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    }
            
            </div>
           
        );
    }
} 

const mapStateToProps = ({Login}) => {
	return {
        Login
	}
};

//actionları props a çeviriyor
const mapDispatchToProps = {
    loginCheck
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
