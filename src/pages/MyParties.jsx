import React from 'react'
import { parties } from '../components/ComponentsStyles'
import { Col, Row } from 'antd'
import { CardSingleParty } from '../components/cards/CardSingleParty'


export const MyParties = () => {
  const cards=[
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
  ];
  return (
    <main className='parties' style={parties}>
      <Row gutter={[24, 40]}>
      {cards.map((card) => (
        <Col span={12} key={card.id}>
          <CardSingleParty id={card.id} img={card.img} title={card.title} />
        </Col>
      ))}
      </Row>
    </main>
  )
}
