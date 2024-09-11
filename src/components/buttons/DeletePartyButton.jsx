import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import axios from 'axios';
import { useAuth } from '../../context/auth/authContext';
import { useNavigate } from "react-router-dom";

export const DeletePartyButton = ({ id }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/parties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      message.success('Fiesta eliminada exitosamente');
      
      navigate('/fiestas/mis-fiestas');
    } catch (error) {
      console.error('Error al eliminar la fiesta:', error);
      message.error('Hubo un error al eliminar la fiesta');
    }
  };

  return (
    <Popconfirm
      title="¿Estás seguro de que deseas eliminar esta fiesta?"
      onConfirm={handleDelete}
      okText="Sí"
      cancelText="No"
    >
      <Button type="primary" danger size="large" block>
        Eliminar fiesta
      </Button>
    </Popconfirm>
  );
};