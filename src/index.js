import React from 'react'
//import { render } from 'react-dom'
//use render()
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import { Layout, Icon, Menu } from 'antd'
import 'antd/dist/antd.css'

import LogPage from './page/log.js'
import CronPage from './page/cron.js'

const { Header, Content, Footer, Sider } = Layout

class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        var msg = "sidebar:" + this.props.name;
        return (
            <Menu theme="dark" mode="inline">
                <Menu.Item><Link to="/">Cron Tasks</Link></Menu.Item>
                <Menu.Item><Link to="/log">Cron Task Log</Link></Menu.Item>
            </Menu>
                )
    }
}

class MainPage extends React.Component{
    render(){
        return (
        <Layout style={{ height: '100%' }}>
                    <Sider>
                        <SideBar name="william" />
                    </Sider>
                    <Layout>
                        <Content>
                            <Switch>
                                <Route path="/" exact component={CronPage} />
                                <Route path="/log" component={LogPage} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
               )
    }
}

const App = () => (
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        )

ReactDOM.render(
            <App />,
            document.getElementById("root"))
