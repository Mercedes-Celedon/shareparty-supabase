import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export const CardSingleParty = ({ id, img, title }) => {
  return (
    <Card
    hoverable
    /* style={{ width: 240 }}  */
    cover={<img alt={title} src={img} />}
    key={id}
  >
    <Meta title={title} />
  </Card>
  )
}
