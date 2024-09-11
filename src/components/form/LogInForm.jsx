import React from 'react'
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { API_POST_LOG_USER} from '../../context/auth/config/url-api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

export const LogInForm = () => {
  const { setToken, setUserId } = useAuth(); 
  const navigate = useNavigate(); // Para la redirección

  const onFinish = async (values) => {
    try {
      const response = await axios.post(API_POST_LOG_USER, {
        email: values.email,
        password: values.password,
      });
    
    const { token, userId } = response.data; 

    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
    localStorage.setItem('loggedInUserId', userId);

    message.success('Ingreso exitoso');
    navigate('/fiestas/mis-fiestas'); 

  } catch (error) {
    console.error('Error al ingresar usuario:', error);
    message.error('Error al ingresar el usuario');
  }
};

  return (
    <Form
      name="login"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: '300px', margin: '0 auto' }}
    >
      <Form.Item
        label={<label style={{ color: "white" }}>Usuario</label>}
        name="email"
        rules={[{ required: true, message: 'Por favor ingresa tu usuario' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Contraseña</label>}
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
      >
        <Input.Password />
      </Form.Item>
      <p style={{ color: "white", textDecoration:"none" }}>¿No estás registrado?<Link to="/registrar">Registrate</Link></p>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}
