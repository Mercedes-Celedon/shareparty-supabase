import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { API_GET_PARTY } from '../../context/auth/config/url-api';
import { Col, Row } from 'antd';
import { imgSingleParty } from '../ComponentsStyles';
import { EditButton } from '../buttons/EditButton';
import { DeletePartyButton } from '../buttons/DeletePartyButton';
export const SinglePartyDetails = () => {
    const { token } = useAuth();
    const [data, setData] = useState(null)
    const { id } = useParams();
    
    useEffect(() => {
        
        axios.get(`http://localhost:3001/parties/${id}`,{
            headers: { Authorization: "Bearer " + token },
        })
            .then(response=>{
                 setData(response?.data)
            })
    
      }, [])

  return (
    <Row gutter={[24, 10]}>
        <Col span={24} style={imgSingleParty} >
            <img src={data?.imageUrl} style={{width:'100%'}}/>
        </Col>
        <Col span={24} >
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
        </Col>
        <Col span ={24}>
            <EditButton id={data?.id}/>
            <DeletePartyButton id={data?.id} />
        </Col>
    </Row>
  )
}
