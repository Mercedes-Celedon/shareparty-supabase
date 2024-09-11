import React from 'react'
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

export const EditButton = ({id}) => {
    const navigate = useNavigate();
    const handleInfo = () => {
        navigate(`/fiestas/edit/${id}`);
    };
  return (
      <Button type="primary" size="large" block onClick={handleInfo} key={id} style={{marginBottom:'10px'}}>
          Editar fiesta
      </Button>
  )
}
