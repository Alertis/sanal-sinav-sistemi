import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Table, Divider, Tag, Spin, Icon } from 'antd';
import {fetchQuestions, deleteQuestion} from '../question/action'
import {fetchReports} from '../report/action'
import Questions from './components/questions'
import Exams from './components/exams'


const { Column, ColumnGroup } = Table 
class Main extends Component {
    state = {
        reports: [],
        questions : [],
        loading: false,
    }
    componentDidMount(){
        this.props.fetchQuestions();
        this.props.fetchReports();
    }
    componentWillReceiveProps(nextState){
        if(nextState.Questions){
            this.setState({questions: nextState.Questions.questions, loading: nextState.Questions.loading})
            if(nextState.Questions.deleteStatus){
                this.props.fetchQuestions();
            }
        }
        if(nextState.Report){
            this.setState({reports: nextState.Report.reports, loading: nextState.Report.loading})
        }
        

    }
    deleteQuestion = (id) =>{
        this.props.deleteQuestion(id);
    }
    render() {
        return(
            <div className="mainPage">
                {localStorage.getItem("role") === "ROLE_TEACHER" ? 
                    <Questions questions={this.state.questions} loading={this.state.loading} delete={this.deleteQuestion} /> :
                    <Exams data={this.state.reports} loading={this.state.loading} />
                }
            </div>
           
        );
    }
} 

const mapStateToProps = ({Questions, Report}) => {
	return {
        Questions, Report
	}
};

const mapDispatchToProps = {
    fetchQuestions, deleteQuestion, fetchReports
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
