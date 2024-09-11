import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react'
import { btn } from '../ComponentsStyles';

export const LogInButton = () => {
  return (
    <Link to="/ingresar" style={btn}>
      <Button type="primary" size="large" block>
          Ingresar
      </Button>
    </Link>
  )
}
