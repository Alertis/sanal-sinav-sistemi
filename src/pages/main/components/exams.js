import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Exams extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="exams">
                <Row gutter={[16,16]}>
                    {this.props.data.map((exam) => {
                        return(
                             <Col span={8}>
                                <Card title={exam.examDate+" Tarihli Sınav"} bordered={false}>
                                    <p>Doğru Cevap Sayısı: {exam.countOfTrueAnswers}</p>
                                    <p>Yanlış Cevap Sayısı: {exam.countOfFalseAnswers}</p>
                                    <p>Puan: {exam.score}</p>
                                </Card>
                            </Col>
                        )
                       
                    })}
                    
                    
                </Row>       
            </div>
           
        );
    }
} 

export default Exams