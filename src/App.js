import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css';
//Pages 
import Login from './pages/login/login.js'
import Main from './pages/main/main.js'

import { Layout, Menu, Icon, Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;
class App extends Component {
    state = {
       collapsed: true,
    };

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };
    render(){
      return (
    <div className="App">
       {window.location.pathname === "/login" ?
           <Switch>
              <Route exact path="/login" component={Login} ></Route>
            </Switch>
        :
        <Layout className="menuComp">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sider">
              <div className="logo" >
                  <p class="script"><span>{ this.state.collapsed ? "SSS" : "Sanal Sınav Sistemi"} </span></p>
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Icon type="home" />
                    <span>Anasayfa</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="file-add" />
                    <span>Soru Ekle</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="edit" />
                    <span>Sınav</span>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Icon type="pie-chart" />
                    <span>Raporlar</span>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Icon type="setting" />
                    <span>Ayarlar</span>
                  </Menu.Item>
              </Menu>
          </Sider>
          <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Row>
                  <Col span={20}><Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} /></Col>
                  <Col span={4}>
                    <span>Osman Yavuz Demir</span> <Icon type="logout" /> 
                  </Col>
                </Row>
              </Header>
              <Content className="content">
                <Switch>
                  <Route exact path="/" component={Main} ></Route>
                  <Route exact path="/" component={Main} ></Route>
                </Switch>
              </Content>
          </Layout>
        </Layout>
      
       }
       
    </div>
  );
    }
  
}

export default App;
