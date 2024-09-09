import React from 'react'  
import { Flex } from "antd";
import {LogInButton} from '../components/buttons/LogInButton'
import {RegisterButton} from "../components/buttons/RegisterButton"
import { logoStyle } from '../components/ComponentsStyles';
import { Col, Row } from 'antd';

export const Home = () => {
  return (
    
    <main className='home'>
    <Row>
    <Col span={24}>
      <Flex gap="middle" justify="center" align='center'>
          <img style={logoStyle} src='/images/logo-share-party-white.png' />
      </Flex>
    </Col>
    <Col span={24}>
      <Flex gap="middle" justify="center" align='center'>
        <LogInButton  />
        <RegisterButton  />
      </Flex>
    </Col>  
    </Row>
    </main>
    
  )
}
