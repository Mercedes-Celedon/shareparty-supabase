import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

export const LogInForm = () => {
    const onFinish = (values) => {
        console.log('Inicio de sesión exitoso:', values);
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
        name="username"
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

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Recuérdame</Checkbox>
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
