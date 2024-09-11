import React from 'react'
import { Button, Form, Input,message } from 'antd';
import axios from 'axios';
import { API_POST_USER } from '../../context/auth/config/url-api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const { setToken, setUserId } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate(); // Para la redirección

  const onFinish = async (values) => {
    try {
      // Hacer la solicitud POST con los valores del formulario
      const response = await axios.post(API_POST_USER, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
    // Verificar si la respuesta tiene el token
    const { token, userId } = response.data; // Asegúrate de que el backend envía token y userId

    // Guardar el token y el userId en el contexto y en el localStorage
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
    localStorage.setItem('loggedInUserId', userId);

    // Mensaje de éxito y redirección a /fiestas
    message.success('Registro exitoso');
    navigate('/fiestas'); // Redirigir a la ruta /fiestas

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    message.error('Error al registrar el usuario');
  }
};
  return (
    <Form
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <Form.Item 
        label={<label style={{ color: "white" }}>Nombre</label>}
        name="name"
        rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Correo electrónico</label>}
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu correo electrónico",
          },
          { type: "email", message: "Por favor ingresa un correo válido" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "white" }}>Contraseña</label>}
        name="password"
        rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
      >
        <Input.Password />
      </Form.Item>
      <p style={{ color: "white", textDecoration:"none" }}>¿Ya estás registrado?<Link to="/ingresar">Ingresa</Link></p>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Registrarme
        </Button>
      </Form.Item>
    </Form>
  );
}
