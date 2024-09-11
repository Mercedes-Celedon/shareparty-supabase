import React, { useState } from 'react'
import { Form, Input, Button, Upload, message, DatePicker, TimePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { API_POST_PARTY} from '../../context/auth/config/url-api';
import { useAuth } from '../../context/auth/authContext';

export const PartyForm = () => {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState('');
  const { token } = useAuth();

  const handleFileChange = (info) => {
    setImageFile(info.target.files[0])
    console.log('imagen:',info.target.files[0]);
  }

  const onFinish = async (values)=>{
    if (!imageFile) {
      message.error('Por favor selecciona una imagen');
      return;
    }
    const formData=new FormData();
    formData.append('title', values.title);
    formData.append('location',values.location);
    formData.append('description', values.description);
    formData.append('imageUrl',imageFile);
    formData.append('partyDate', values.description);
    formData.append('startTime', values.description);
    formData.append('endTime', values.description);

    values.imageUrl = imageFile;
    console.log(values);
    
    // Verifica si el token está disponible
    if (!token) {
      message.error('No estás autenticado. Por favor inicia sesión.');
      return;
    }
    try{
      const response= await axios.post(API_POST_PARTY, values, {
        headers:{
          'Content-Type':'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      } )
      message.success('Fiesta creada exitosamente')
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al crear la Party:', error);
      message.error('Hubo un error al crear la Party');
    }
  }
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <Form.Item
        name="title"
        label="Título"
        rules={[{ required: true, message: 'Por favor ingresa un título' }]}
      >
        <Input placeholder="Título de la Party" />
      </Form.Item>
      <Form.Item
        name="location"
        label="Ubicación"
        rules={[{ required: true, message: 'Por favor ingresa la ubicación' }]}
      >
        <Input placeholder="Ubicación de la Party" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Descripción"
        rules={[{ required: true, message: 'Por favor ingresa una descripción' }]}
      >
        <Input.TextArea placeholder="Descripción de la Party" />
      </Form.Item>

      {/* <Form.Item
        label="Imagen"
      >
        <Upload
          listType="picture"
          beforeUpload={() => false} // No subir automáticamente
          onChange={handleFileChange}
        >
          <Button icon={<UploadOutlined />}>Seleccionar Imagen</Button>
        </Upload>
      </Form.Item> */} 
      <input type='file' name='imageUrl' onChange={handleFileChange}/>

      <Form.Item>
      <Form.Item
        name="partyDate"
        label="Fecha de la fiesta"
        rules={[{ required: true, message: 'Ingresa una fecha' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="startTime"
        label="Hora de Inicio"
        rules={[{ required: true, message: 'Por favor ingresa una hora de inicio' }]}
      >
        <TimePicker />
      </Form.Item>
      <Form.Item
        name="endTime"
        label="Hora de fin"
        rules={[{ required: true, message: 'Por favor ingresa una hora de fin' }]}
      >
        <TimePicker />
      </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Crear Party
        </Button>
      </Form.Item>
    </Form>
  )
}
