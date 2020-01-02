import React, { Component } from 'react';
import {Tabs, Icon, Card} from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from 'recharts';
import {fetchReports, fetchCategoryReports} from './action'
import {connect} from 'react-redux'


const { TabPane } = Tabs;

class Report extends Component {
  state={
    timeData:[],
    catData:[],
    loading:false
  }
   componentDidMount(){
     this.props.fetchReports();
     this.props.fetchCategoryReports();

   }
   componentWillReceiveProps(nextState){
     if(nextState.Report){
       if(nextState.Report.reports.length>0){
         let timeData = [];
         for(let i=0; i<nextState.Report.reports.length; i++){
           timeData.push({
             name: nextState.Report.reports[i].examDate,
             puan: nextState.Report.reports[i].score
           })
         }
        this.setState({timeData})

       }
       if(nextState.Report.reportsCategory.length>0){
         let catData = [];
         for(let i=0; i<nextState.Report.reportsCategory.length; i++){
           catData.push({
             name: nextState.Report.reportsCategory[i].name,
             adet: nextState.Report.reportsCategory[i].trueAnswer
           })
         }
        this.setState({catData})

       }
       this.setState({loading: nextState.Report.loading})
     }
   }
    render() {
      console.log(this.state.timeData)
        return(
            <div className="report">
                <Card>
                      <Tabs defaultActiveKey="1">
                        <TabPane tab={ <span> <Icon type="line-chart" /> Zaman Grafiği </span> } key="1" >
                            <LineChart
                                width={900}
                                height={500}
                                data={this.state.timeData}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="puan" stroke="#82ca9d" />
                            </LineChart>
                        </TabPane>
                        <TabPane tab={ <span> <Icon type="bar-chart" /> Kategori Grafiği </span> } key="2" >
                            <BarChart
                                width={900}
                                height={500}
                                data={this.state.catData}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="adet" fill="#82ca9d" />
                            </BarChart>
                        </TabPane>
                    </Tabs>
                </Card>
               
            </div>
           
        );
    }
} 

const mapStateToProps = ({Report}) => {
	return {
        Report
	}
};

const mapDispatchToProps = {
    fetchReports,fetchCategoryReports
};


export default connect(mapStateToProps, mapDispatchToProps)(Report);