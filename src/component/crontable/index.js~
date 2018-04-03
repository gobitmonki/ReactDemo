import React from 'react'
import { Table, Button } from 'antd'
import 'antd/dist/antd.css'
import CronTable from './CronTable.js'

const datasource = [{
    "id": 1,
    "minute": "*",
    "hour": "*",
    "day of month": "*",
    "month": "*",
    "day of week": "*",
    "command": "ls"
},{
    "id": 2,
    "minute": "*",
    "hour": 2,
    "day of month": "*",
    "month": "*",
    "day of week": "*",
    "command": "ls -ltr"
}];

const columns = [{
    title: "Minute",
    dataIndex: "minute",
    key: "minute",
},{
    title: "Hour",
    dataIndex: "hour",
    key: "hour",
},{
    title: "Day of Month",
    dataIndex: "day of month",
    key: "day of month",
},{
    title: "Month",
    dataIndex: "month",
    key: "month",
},{
    title: "Day of Week",
    dataIndex: "day of week",
    key: "Day of Week",
},{
    title: "Command",
    dataIndex: "command",
    key: "cmd",
}]

class CronTableContainer extends React.Component {
    state = {
        selectedRowKeys: []
    }

    start = () => {
        setTimeout(()=> {
            this.setState({
                selectedRowKeys: []
            })    
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
       console.log('selectedRowKeys changed: ', selectedRowKeys);
       this.setState({ selectedRowKeys })
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button 
                        type="primary"
                        onClick={ this.start } 
                        >
                    Add
                    </Button>
                </div>
                <Table rowSelection={rowSelection} dataSource={datasource} columns={columns} />)
            </div>
                )
        //return (<Table dataSource={datasource} columns={columns} />)
    }
}

export default CronTableContainer
