import React, { Component } from 'react';
import { Card, Pagination, Typography, Button, Row, Col, Divider, Icon, Spin } from 'antd';
import Countdown from "react-countdown-now";
import {fetchExam} from './action';
import {connect} from 'react-redux'

const { Title } = Typography;
class Exam extends Component {
    state={
        questions:[],
        answers:[],
        currentPage: 1,
        finishDate: Date.now(),
        loading:false,
        trueAnswer:0,
        falseAnswer:0
    }
   componentDidMount(){
       this.props.fetchExam()
   }
   componentWillReceiveProps(nextState){
       if(Object.keys(nextState.Exam.examQ).length>0){
           let d = new Date();
           let answers = []
           for(let i=0; i<nextState.Exam.examQ.questions.length; i++)
            answers.push(null)
           this.setState({questions: nextState.Exam.examQ, finishDate: d.setHours(+1), answers})

       }
       nextState.Exam && this.setState({loading: nextState.Exam.loading})
   }
   nextQuestion = (page,pageSize) =>{
        this.setState({currentPage: page})
        console.log(this.state.answers)
   }
   setAnswer = (indis, answer) =>{
       let answers = this.state.answers
       answers[indis]=answer+1;
        this.setState({answers})
   }
   answerControl = () =>{
       let trueAnswer=0
       let falseAnswer = 0
       for(let i = 0; i < this.state.questions.questions.length; i++){
           console.log(this.state.questions.questions[i].rightAnswer, this.state.answers[i])
           if(this.state.questions.questions[i].rightAnswerIndex === this.state.answers[i])
                trueAnswer = trueAnswer + 1;
            else
                falseAnswer = falseAnswer + 1
       }
        console.log("Doğru Cevap Sayısı: "+trueAnswer+" Yanlış Cevap Sayısı: "+falseAnswer)
        console.log(this.state.questions.questions, this.state.answers)
   }
    render() {
        let examQ = this.state.questions.questions ? this.state.questions.questions : []
        
        return(
            <div className="exam">
                 {this.state.loading ? 
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} tip="Yükleniyor..." /> :
              <Card title={
                  <Countdown date={this.state.finishDate} />
              } extra={ 
                <Pagination showQuickJumper onChange={this.nextQuestion} current={this.state.currentPage} pageSize={1} total={examQ.length} /> 
              }>
             
                <div style={{textAlign:"center"}}>
                    {examQ.length > 0 ? 
                        <>
                             <Title level={3} >  
                                {examQ[this.state.currentPage-1].questionText}
                            </Title>
                            <Divider />
                            <Row gutter={[16, 16]}>
                                {examQ[this.state.currentPage-1].choices.map((choice,i) => {
                                    return(  <Col span="12"> <Button size="large" block onClick={() =>  this.setAnswer(this.state.currentPage-1,i)}> {choice.choice1} </Button> </Col> )
                                })}
                            </Row>
                        </> :
                        <Title> Görüntülenecek hiç soru yok!</Title>
                    }
                    
                    <Divider />
                    {this.state.currentPage < examQ.length ? 
                     <Button type="danger" size="large" onClick={() => {this.nextQuestion(this.state.currentPage+1, examQ.length)}}> Sonraki Soru <Icon type="right" /></Button> :
                     <Button type="primary" size="large" onClick={this.answerControl}>Sınavı Bitir !<Icon type="right" /></Button>}
                   
                </div>
               
              </Card>
            }
            </div>
           
        );
    }
} 

const mapStateToProps = ({Exam}) => {
	return {
        Exam
	}
};

const mapDispatchToProps = {
    fetchExam
};


export default connect(mapStateToProps, mapDispatchToProps)(Exam);
