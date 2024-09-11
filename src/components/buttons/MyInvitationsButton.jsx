import React from 'react'
import { LuPartyPopper } from "react-icons/lu";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const MyInvitationsButton = () => {
  return (
    <Link to="mis-fiestas">
        <Button type="primary" style={{background:'#00BE68',padding: '26px 14px', fontSize: '30px'}} >
            <LuPartyPopper />
        </Button>
    </Link>
  )
}
