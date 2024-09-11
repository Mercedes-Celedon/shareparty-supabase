import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, message, DatePicker, TimePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { API_POST_PARTY, API_PUT_PARTY} from '../../context/auth/config/url-api';
import { useAuth } from '../../context/auth/authContext';
import dayjs from 'dayjs';
import { btnImage, titlesForm } from '../ComponentsStyles';

export const PartyForm = ({ partyData = null }) => {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    // Si partyData está presente, precargar los datos en el formulario
    if (partyData) {
      form.setFieldsValue({
        title: partyData.title,
        location: partyData.location,
        description: partyData.description,
        partyDate: partyData.partyDate,
        startTime: partyData.startTime,
        endTime: partyData.endTime,
      });
    }
  }, [partyData, form]);

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
    formData.append('partyDate', values.partyDate ? values.partyDate.format('YYYY-MM-DD') : '');
    formData.append('startTime', values.startTime ? values.startTime.format('HH:mm:ss') : '');
    formData.append('endTime', values.endTime ? values.endTime.format('HH:mm:ss') : '');


    values.imageUrl = imageFile;
    console.log(values);
    
    // Verifica si el token está disponible
    if (!token) {
      message.error('No estás autenticado. Por favor inicia sesión.');
      return;
    }
    try{
      let response;
      if (partyData) {
        // Modo edición: hacer una solicitud PUT
        response = await axios.put(`${API_PUT_PARTY}/${partyData.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        message.success('Fiesta actualizada exitosamente');
      } else {
        // Modo creación: hacer una solicitud POST a /parties
        response = await axios.post(API_POST_PARTY, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        message.success('Fiesta creada exitosamente');
      }
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al procesar la fiesta:', error);
      message.error('Hubo un error al procesar la fiesta');
    }
  }
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: '400px', margin: '0 auto', color:'white'}}
    >
      <Form.Item
        name="title"
        label={<span style={titlesForm}>Título</span>}
        rules={[{ required: true, message: 'Por favor ingresa un título' }]}
      >
        <Input placeholder="Título de la Party" />
      </Form.Item>
      
      <Form.Item
        name="location"
        label={<span style={titlesForm}>Ubicación</span>}
        rules={[{ required: true, message: 'Por favor ingresa la ubicación' }]}
      >
        <Input placeholder="Ubicación de la Party" />
      </Form.Item>

      <Form.Item
        name="description"
        label={<span style={titlesForm}>Descripción</span>}
        rules={[{ required: true, message: 'Por favor ingresa una descripción' }]}
      >
        <Input.TextArea placeholder="Descripción de la Party" />
      </Form.Item>

      {/* <Form.Item
       name="imageUrl"
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
      <label style={titlesForm}>*Imagen (max. 5MB) </label>
      <input type='file' name='imageUrl' style={btnImage} onChange={handleFileChange}/>

      <Form.Item
        name="partyDate"
        label={<span style={titlesForm}>Fecha de la fiesta</span>}
        rules={[{ required: true, message: 'Ingresa una fecha' }]}
      >
        <DatePicker format="YYYY-MM-DD"/>
      </Form.Item>

      <Form.Item
        name="startTime"
        label={<span style={titlesForm}>Hora de inicio</span>}
        rules={[{ required: true, message: 'Por favor ingresa una hora de inicio' }]}
      >
        <TimePicker format="HH:mm:ss" />
      </Form.Item>

      <Form.Item
        name="endTime"
        label={<span style={titlesForm}>Hora de inicio</span>}
        rules={[{ required: true, message: 'Por favor ingresa una hora de fin' }]}
      >
        <TimePicker format="HH:mm:ss"/>
      </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Crear Fiesta
        </Button>
    </Form>
  )
}
