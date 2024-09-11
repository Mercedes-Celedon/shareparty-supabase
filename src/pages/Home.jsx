import React from 'react'  
import { Flex } from "antd";
import {LogInButton} from '../components/buttons/LogInButton'
import {RegisterButton} from "../components/buttons/RegisterButton"
import { logoStyle, home } from '../components/ComponentsStyles';
import { Col, Row } from 'antd';

export const Home = () => {
  return (
    <main className='home' style={home}>
    <Row gutter={[24, 40]} >
      <Col span={24}>
        <Flex gap="middle" justify="center" align='center'>
            <img style={logoStyle} src='/images/logo-share-party-white.png' />
        </Flex>
      </Col>
      <Col span={24}>
        <Flex gap="middle" justify="center" align='center'>
          <LogInButton  />
        </Flex>
      </Col>
      <Col span={24}>
        <Flex gap="middle" justify="center" align='center'>
          <RegisterButton  />
        </Flex>
      </Col>   
    </Row>
    </main>
    
  )
}
