import React, { useEffect, useState } from 'react'
import { parties } from '../components/ComponentsStyles'
import { Col, Row, message } from 'antd'
import { CardSingleParty } from '../components/cards/CardSingleParty'
import axios from 'axios';
import { useAuth } from '../context/auth/authContext';
import { API_GET_PARTIES } from '../context/auth/config/url-api';

export const MyParties = () => {
  const [cards, setCards] = useState([]);  
  const { token } = useAuth(); 

  const fetchParties = async () => {
    try {
      const response = await axios.get(API_GET_PARTIES, {
        headers: {
          Authorization: `Bearer ${token}`,  // Pasamos el token en el header de la petición
        },
      });
      setCards(response.data);  // Guardamos las fiestas en el estado
    } catch (error) {
      console.error('Error al obtener las fiestas:', error);
      message.error('Hubo un error al obtener las fiestas');
    }
  };

  // useEffect para hacer la petición al montar el componente
  useEffect(() => {
    fetchParties();  // Llamamos a la función para obtener las fiestas
  }, []);
/*   const cards=[
    {
      id: '1',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Fiesta de Cumpleaños'
    },
    {
      id: '2',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Fiesta en la Playa'
    },
    {
      id: '3',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Fiesta de Despedida'
    },
    {
      id: '4',
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Fiesta en la Terraza'
    }
  ]; */
  return (
    <main className='parties' style={parties}>
      <Row gutter={[24, 40]}>
      {cards.length > 0 ? (
          cards.map((card) => (
            <Col span={12} key={card.id}>
              <CardSingleParty id={card.id} img={card.imageUrl} title={card.title} />
            </Col>
          ))
        ) : (
          <p>No hay fiestas disponibles</p>
        )}
      </Row>
    </main>
  )
}
