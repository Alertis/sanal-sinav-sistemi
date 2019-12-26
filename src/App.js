import React, {Component} from 'react';
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
//Pages 
import Login from './pages/login/login.js'
import Main from './pages/main/main.js'
import AddQuestion from './pages/question/addQuestion.js'
import Exam from './pages/exam/exam.js'
import Report from './pages/report/report.js'



import { Layout, Menu, Icon, Row, Col, Dropdown } from 'antd';

const { Header, Sider, Content } = Layout;
class App extends Component {
    state = {
       collapsed: true,
       menuKey: 1,
       logout: false
    };
    setMenuActive = () => {
      let menu=0;
      switch(window.location.pathname){
        case '/' :
          return ( this.setState({menuKey: 1}))
        case '/addQuestion' :
         return ( this.setState({menuKey: 2}))
        case '/exam' :
         return ( this.setState({menuKey: 3}))
        case '/report' :
         return ( this.setState({menuKey: 4}))
        default :
          return ( this.setState({menuKey: 1}))

      }
    }
    componentWillMount(){
      let authorization = localStorage.getItem('authorization')
      if((authorization === undefined || authorization === "" || authorization === null) && (window.location.pathname !== "/login"))
       this.setState({logout: true})
      this.setMenuActive()
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
                    <NavLink to="/"> <Icon type="home" /> <span>Anasayfa</span></NavLink> </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink to="addQuestion"><Icon type="file-add" /> <span>Soru Ekle</span></NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink to="exam"><Icon type="edit" /><span>Sınav</span></NavLink>
                  </Menu.Item>
                  <Menu.Item key="4">
                     <NavLink to="report"> <Icon type="pie-chart" /> <span>Raporlar</span></NavLink>
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
                  <Route exact path="/exam" component={Exam} ></Route>
                  <Route exact path="/report" component={Report} ></Route>
                </Switch>
              </Content>
          </Layout>
        </Layout>
      
       }
       { this.state.logout && <Redirect to="/login" />}
    </div>
  );
    }
  
}

export default App;
