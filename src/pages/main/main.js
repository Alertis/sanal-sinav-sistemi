import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Table, Divider, Tag, Spin, Icon } from 'antd';
import {fetchQuestions} from '../question/action'
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
        nextState.Questions && this.setState({questions: nextState.Questions.questions, loading: nextState.Questions.loading})
    }
    render() {
        return(
            <div className="mainPage">
                {localStorage.getItem("role") === "ROLE_TEACHER" ? 
                    <Questions questions={this.state.questions} loading={this.state.loading} /> :
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
    fetchQuestions
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
