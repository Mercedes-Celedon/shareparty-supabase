import React from 'react'
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const CardSingleParty = ({ id, img, title }) => {
    const navigate = useNavigate();
    const handleInfo = () => {
        navigate(`${id}`);
    };
  
    return (
        <Card
            hoverable
            cover={<img alt={title} src={img} />}
            key={id}
            onClick={handleInfo}
        >
            <Meta title={title} />
        </Card>
    )
}
