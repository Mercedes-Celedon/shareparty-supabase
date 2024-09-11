import React from 'react'
import { Flex } from "antd";
import { logoStyle, home } from '../components/ComponentsStyles';
import { Col, Row } from 'antd';
import { RegisterForm } from '../components/form/RegisterForm';

export const Register = () => {
  return (
    
    <main className='home' style={home}>
    <Row gutter={[24, 10]} >
      <Col span={24}>
        <Flex gap="middle" justify="center" align='center'>
            <img style={logoStyle} src='/images/logo-share-party-white.png' />
        </Flex>
      </Col>
      <Col span={24}>
        <Flex gap="middle" justify="center" align='center'>
            <h1 style={{color:"white"}}>Registrate</h1>
        </Flex>
      </Col>
    </Row>
    <Row gutter={[24, 10]} >
      <RegisterForm />
    </Row>
      
    
    </main>
  )
}
