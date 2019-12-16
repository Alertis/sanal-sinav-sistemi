import React, { Component } from 'react';
import { Card, Form, Icon, Input, Button, Row, Col, Select, Upload  } from 'antd';

const { TextArea } = Input
const { Option } = Select
class AddQuestion extends Component {
   
    render() {
        return(
            <div className="addQuestion">
              <Card title="Soru Ekle">
                    <Form layout="horizontal"  labelCol= {{span: 4}} wrapperCol= {{span: 20}}>
                        <Form.Item label="Soru: " horizontal>
                            <TextArea rows={4} placeholder="Lütfen Sorunuz Giriniz..." />
                        </Form.Item>
                          <Form.Item label="Resim: ">
                             <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Resim Yüklemek İçin Tıklayın
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="Yanlış Cevap 1: " horizontal>
                            <Input placeholder="Lütfen Yanlış Cevabı Giriniz..." />
                        </Form.Item>
                        <Form.Item label="Yanlış Cevap 2: " horizontal>
                            <Input placeholder="Lütfen Yanlış Cevabı Giriniz..." />
                        </Form.Item>
                        <Form.Item label="Yanlış Cevap 3: " horizontal>
                            <Input placeholder="Lütfen Yanlış Cevabı Giriniz..." />
                        </Form.Item>
                        <Form.Item label="Doğru Cevap: " horizontal>
                            <Input placeholder="Lütfen Doğru Cevabı Giriniz..." />
                        </Form.Item>
                        <Form.Item label="Konu: " horizontal>
                             <Select placeholder="Lütfen Konu Seçin">
                                <Option value="1">Temel Kavramlar</Option>
                                <Option value="2">Sayı Basamakları</Option>
                                <Option value="3">Rasyonel Sayılar</Option>
                                <Option value="4">Ondalıklı Sayılar</Option>
                                <Option value="5">Basit Eşitsizlikler</Option>
                                <Option value="6">Basit Eşitsizlikler</Option>
                                <Option value="7">Üslü Sayılar</Option>
                                <Option value="8">Köklü Sayılar</Option>
                                <Option value="9">Çarpanlara Ayırma</Option>
                                <Option value="10">Problemler</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item horizontal>
                            <Button type="primary">Soru Kaydet</Button>
                        </Form.Item>
                    </Form>
              </Card>
            </div>
           
        );
    }
} 

export default AddQuestion;
