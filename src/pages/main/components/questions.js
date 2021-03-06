import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Table, Divider, Tag, Spin, Icon } from 'antd';

const { Column, ColumnGroup } = Table 
class Questions extends Component {
    state = {
        questions : [],
        loading: false,
    }
    render() {
        return(
            <div className="questions">
                <Table dataSource={this.props.questions} loading={this.props.loading } style={{backgroundColor:"white"}}>
                    <Column title="Soru" dataIndex="questionText" key="questionText" render={(questionText)=>(
                        <div dangerouslySetInnerHTML={{ __html: questionText}}></div>
                    )} />
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
                    <Column title="İşlemler" key="action" render={(data) => (
                        <span>
                            <Link onClick={() => this.props.delete(data.id)}> Sil </Link>
                        </span>
                    )}
                    />
                </Table>
                    
                
            </div>
           
        );
    }
} 

export default Questions