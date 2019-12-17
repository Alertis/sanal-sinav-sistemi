import React, { Component } from 'react';
import { Card, Pagination, Typography, Button, Row, Col, Divider, Icon } from 'antd';
import Countdown from "react-countdown-now";

const { Title } = Typography;
class Exam extends Component {
   componentDidMount(prevProps){
       console.log(prevProps)
   }
    render() {
        return(
            <div className="exam">
              <Card title={
                  <Countdown date={Date.now() + 1000*60*60} />
              } extra={ 
                <Pagination showQuickJumper defaultCurrent={2} pageSize={1} total={50} /> 
              }>
                <div style={{textAlign:"center"}}>
                    <Title level={3} >  
                        Bir malın etiket fiyatı alış fiyatı üzerinden % 20 kar ile belirleniyor. Bu malın etiket fiyatına % 30 zam yapılırsa toplam kar yüzde kaç olur? 
                    </Title>
                    <Divider />
                    <Row gutter={[16, 16]}>
                        <Col span="12"> <Button size="large" block> %56 </Button> </Col>
                        <Col span="12"> <Button size="large" block> %72 </Button> </Col>
                        <Col span="12"> <Button size="large" block> %44 </Button> </Col>
                        <Col span="12"> <Button size="large" block> %63 </Button> </Col>
                    </Row>
                    <Divider />
                    <Button type="danger" size="large"> Sonraki Soru <Icon type="right" /></Button>
                </div>
               
              </Card>
            </div>
           
        );
    }
} 

export default Exam;
