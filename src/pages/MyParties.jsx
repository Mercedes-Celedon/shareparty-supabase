import React, { useEffect, useState } from 'react'
import { parties } from '../components/ComponentsStyles'
import { Col, Row, message } from 'antd'
import { CardSingleParty } from '../components/cards/CardSingleParty'
import axios from 'axios';
import { useAuth } from '../context/auth/authContext';
import { API_GET_PARTIES } from '../context/auth/config/url-api';
import { LuPartyPopper } from "react-icons/lu";

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

  return (
    <main className='parties' style={parties}>
      <Row gutter={[24, 40]}>
        <Col span={24}>
          <h1><LuPartyPopper />Fiestas creadas</h1>
        </Col>
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
