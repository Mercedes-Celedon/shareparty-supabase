import React from 'react'
import { Button } from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LogOutButton = () => {
  return (
    <Link to="/">
        <Button type="primary" style={{ marginRight: '10px' }}>
            <LoginOutlined />
        </Button>
    </Link>
  )
}
