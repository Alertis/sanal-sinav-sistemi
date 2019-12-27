import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Table, Divider, Tag, Spin, Icon } from 'antd';
import {fetchQuestions, deleteQuestion} from '../question/action'
import Questions from './components/questions'
import Exams from './components/exams'


const { Column, ColumnGroup } = Table 
class Main extends Component {
    state = {
        questions : [],
        loading: false,
    }
    componentDidMount(){
        this.props.fetchQuestions();
    }
    componentWillReceiveProps(nextState){
        if(nextState.Questions){
            this.setState({questions: nextState.Questions.questions, loading: nextState.Questions.loading})
            if(nextState.Questions.deleteStatus){
                this.props.fetchQuestions();
            }
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
                    <Exams />
                }
            </div>
           
        );
    }
} 

const mapStateToProps = ({Questions}) => {
	return {
        Questions
	}
};

const mapDispatchToProps = {
    fetchQuestions, deleteQuestion
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
