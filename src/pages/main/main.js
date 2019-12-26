import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Table, Divider, Tag, Spin, Icon } from 'antd';
import {fetchQuestions} from '../question/action'

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
             
                    <Table dataSource={this.state.questions} loading={this.state.loading } style={{backgroundColor:"white"}}>
                        <Column title="Soru" dataIndex="questionText" key="questionText" />
                        <Column title="Cevaplar" dataIndex="choices" key="choices" render={(choices, {rightAnswerIndex}) => (
                            <span>
                                {choices.map((choice,i) => (
                                    <Tag color={i === (rightAnswerIndex-1) ? "green" : "red"} key={choice.choice1}>
                                        {choice.choice1}
                                    </Tag>
                                ))}
                            </span>
                        )}/>
                        <Column title="Kategori" dataIndex="subject" key="subject" render={(subject) => (
                            <span>
                                    <Tag color={"blue"} key={subject.name}>
                                        {subject.name}
                                    </Tag>
                            </span>
                        )}/>
                        <Column title="İşlemler" key="action" render={() => (
                            <span>
                                <a>Düzenle</a>
                                <Divider type="vertical" />
                                <a>Sil</a>
                            </span>
                        )}
                        />
                    </Table>
                
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
