import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, Form, Icon, Input, Button, Select, Alert, Spin   } from 'antd';
import {addQuestion} from './action'


const { TextArea } = Input
const { Option } = Select
class AddQuestion extends Component {
   state={
       questionText:"",
       answer1: "",
       answer2: "",
       answer3: "",
       answer4: "",
       trueAnswer: "",
       subject:"",
       error: false,
       status: false,
       loading: false,
   }
   handleChange = (e) =>{
       e.target ? this.setState({[e.target.name]: e.target.value}) 
       : this.setState({trueAnswer: e})
   }
   saveQuestion = () => {
       if( this.state.questionText === "" || this.state.answer1 === "" || this.state.answer2 === "" || this.state.answer3 === "" || this.state.answer4 === "" 
       || this.state.trueAnswer === "" || this.state.subject === "" ){
           this.setState({error: true})
       } else { 
             let question = {
                questionText: this.state.questionText,
                choices:[
                    {choice1: this.state.answer1},
                    {choice1: this.state.answer2},
                    {choice1: this.state.answer3},
                    {choice1: this.state.answer4},
                ],
                rightAnswerIndex: this.state.trueAnswer,
                subject:this.state.subject
            }
           this.setState({error: false})
           this.props.addQuestion(question)
       }
   }
   componentWillReceiveProps(nextState){
       if(nextState.Questions.questions){
           this.setState({status: true, loading: nextState.Questions.loading, questionText:"", answer1: "", answer2: "", answer3: "", answer4: "", trueAnswer: "", subject:"",});
       } 
   }
    render() {
        return(
            <div className="addQuestion">
                {this.state.loading ? 
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} tip="Yükleniyor..." /> :
                    <Card title="Soru Ekle">
                        {this.state.error && <Alert message="Hata !" description="Lütfen Formdaki Boşlukları Doldurunuz" type="error" showIcon />}
                        {this.state.status && <Alert message="Başarılı !" description="Soru Başarı ile kayıt edildi" type="success" showIcon />}

                            <Form layout="horizontal"  labelCol= {{span: 4}} wrapperCol= {{span: 20}}>
                                <Form.Item label="Soru: " horizontal>
                                    <TextArea rows={4} placeholder="Lütfen Sorunuz Giriniz..." name="questionText" value={this.state.questionText} onChange={this.handleChange}/>
                                </Form.Item>
                                <Form.Item label="Cevap 1: " horizontal>
                                    <Input placeholder="Lütfen Cevabı Giriniz..." name="answer1" value={this.state.answer1} onChange={this.handleChange}/>
                                </Form.Item>
                                <Form.Item label="Cevap 2: " horizontal >
                                    <Input placeholder="Lütfen Cevabı Giriniz..." name="answer2" value={this.state.answer2} onChange={this.handleChange}/>
                                </Form.Item>
                                <Form.Item label="Cevap 3: " horizontal>
                                    <Input placeholder="Lütfen Cevabı Giriniz..." name="answer3" value={this.state.answer3} onChange={this.handleChange} />
                                </Form.Item>
                                <Form.Item label="Cevap 4: " horizontal>
                                    <Input placeholder="Lütfen Cevabı Giriniz..." name="answer4" value={this.state.answer4} onChange={this.handleChange} />
                                </Form.Item>
                                <Form.Item label="Doğru Cevabı Seçin: " horizontal>
                                    <Select placeholder="Lütfen Cevap Seçin" value={this.state.trueAnswer} onChange={this.handleChange}>
                                        <Option value="1">Cevap 1</Option>
                                        <Option value="2">Cevap 2</Option>
                                        <Option value="3">Cevap 3</Option>
                                        <Option value="4">Cevap 4</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Konu " horizontal>
                                    <Input placeholder="Lütfen Konuyu Giriniz..." name="subject" value={this.state.subject} onChange={this.handleChange} required/>
                                </Form.Item>
                                <Form.Item horizontal>
                                    <Button type="primary" onClick={this.saveQuestion}>Soru Kaydet</Button>
                                </Form.Item>
                            </Form>
                    </Card>
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
    addQuestion
};


export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
