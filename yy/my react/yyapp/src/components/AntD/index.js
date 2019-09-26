import React, {Component} from 'react'
import {Table} from 'antd'

const tableProps = {}

tableProps.dataSource = [
    {
        key: 1,
        name: 'y1',
        age: 70,
        ms: 'ms1'
    },
    {
        key: 2,
        name: 'y2',
        age: 46.6,
        ms: 'ms2'
    }
]

for(let i = 3;i < 20;i ++){
    tableProps.dataSource.push({
        key: i,
        name: 'y' + i,
        age: 43 + i,
        ms: 'ms' + i
    })
}

class AntD extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){

    }

    render(){
        tableProps.columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 200
            }, {
            title: '年龄',
            dataIndex: 'age', 
            key: 'age',
            }, {
            title: '信息',
            dataIndex: 'ms',
            key: 'ms',
            render: (text,obj,idx) => (    //a：当前ms；b：当前对象；c：索引
                <div>{text}-{obj.ms}-{idx}</div>
            ) 
        }];
        return(
            <div>
                <Table  {...tableProps} 
                        onChange={this.change}
                        scroll={{ x: 1000, y: 200 }}
                        pagination={{pageSize: 5}}
                />
            </div>
        )
    }
}

export default AntD