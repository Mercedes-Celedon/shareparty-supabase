import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react'
import { btn } from '../ComponentsStyles';

export const LogInButton = () => {
  return (
    <Link to="/ingresar">
      <Button type="primary" style={btn}>
          Ingresar
      </Button>
    </Link>
  )
}
