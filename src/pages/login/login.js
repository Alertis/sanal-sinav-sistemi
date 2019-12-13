import React, { Component } from 'react';
import { Card, Form, Icon, Input, Button } from 'antd';

class Login extends Component {
   
    render() {
        return(
            <div className="loginPage">
              <Card className="wrapCard">
                    <div>
                        <img src="/assets/images/img-01.png" alt="IMG" />
                    </div>
                    <Form>
                        <span className="title"> Sisteme Giriş</span>

                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Kullanıcı Adı" />
                        </Form.Item>

                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Şifre" />
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Giriş Yap
                            </Button>
                        </Form.Item>
                    </Form>
              </Card>
            </div>
           
        );
    }
} 

export default Login;

/**
    <div class="wrap-login100">
                    <div class="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>

                   
			    </div>
**/