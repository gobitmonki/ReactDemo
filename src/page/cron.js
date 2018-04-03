import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import CronTable from '../component/crontable'

const { Header, Content, Footer } = Layout

var CronPage = function(props) {
    return (
        <Layout>
            <Content>
                <h1>Cron Tasks</h1>
                <hr />
                <CronTable />
            </Content>
        </Layout>
            )
}
export default CronPage
