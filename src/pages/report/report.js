import React, { Component } from 'react';
import {Tabs, Icon, Card} from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from 'recharts';

const { TabPane } = Tabs;

const lineData = [
  {
    name: 'Page A', uv: 4000
  },
  {
    name: 'Page B', uv: 3000
  },
  {
    name: 'Page C', uv: 2000
  },
  {
    name: 'Page D', uv: 2780
  },
  {
    name: 'Page E', uv: 1890
  },
  {
    name: 'Page F', uv: 2390
  },
  {
    name: 'Page G', uv: 3490
  },
];

class Report extends Component {
   
    render() {
        return(
            <div className="report">
                <Card>
                      <Tabs defaultActiveKey="2">
                        <TabPane tab={ <span> <Icon type="line-chart" /> Zaman Grafiği </span> } key="1" >
                            <LineChart
                                width={500}
                                height={300}
                                data={lineData}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </TabPane>
                        <TabPane tab={ <span> <Icon type="bar-chart" /> Sınav Grafiği </span> } key="2" >
                            <BarChart
                                width={500}
                                height={300}
                                data={lineData}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </TabPane>
                    </Tabs>
                </Card>
               
            </div>
           
        );
    }
} 

export default Report;
