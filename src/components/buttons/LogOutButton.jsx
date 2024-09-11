import React from 'react'
import { Button } from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth/authContext";

export const LogOutButton = () => {
  const { logout } = useAuth();

  return (
    <Link to="/">
        <Button type="primary" style={{ marginRight: '10px' }} onClick={logout}>
            <LoginOutlined />
        </Button>
    </Link>
  )
}
