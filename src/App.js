import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import 'antd/dist/antd.css';
//Pages 
import Login from './pages/login/login.js'
import Main from './pages/main/main.js'
import AddQuestion from './pages/question/addQuestion.js'


import { Layout, Menu, Icon, Row, Col, Dropdown } from 'antd';

const { Header, Sider, Content } = Layout;
class App extends Component {
    state = {
       collapsed: true,
       menuKey: 1
    };
    setMenuActive = () => {
      let menu=0;
      switch(window.location.pathname){
        case '/' :
          return ( this.setState({menuKey: 1}))
        case '/addQuestion' :
         return ( this.setState({menuKey: 2}))
      }
    }
    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };
    render(){
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <a>Çıkış Yap</a>
          </Menu.Item>
        </Menu>
      );
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
              <Menu theme="dark" mode="inline" selectedKeys={[this.state.menuKey.toString()]} onSelect={this.setMenuActive}>
                  <Menu.Item key="1">
                    <Icon type="home" />
                    <NavLink to="/">Anasayfa</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="file-add" />
                    <NavLink to="addQuestion">Soru Ekle</NavLink>
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
                    <Dropdown overlay={menu} trigger={['click']}>
                     <a className="ant-dropdown-link" href="#">
                        Osman Yavuz Demir <Icon type="down" />
                      </a>
                    </Dropdown>
                  </Col>
                </Row>
              </Header>
              <Content className="content">
                <Switch>
                  <Route exact path="/" component={Main} ></Route>
                  <Route exact path="/addQuestion" component={AddQuestion} ></Route>
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
