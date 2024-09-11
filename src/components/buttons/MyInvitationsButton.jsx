import React from 'react'
import { LuPartyPopper } from "react-icons/lu";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const MyInvitationsButton = () => {
  return (
    <Link to="mis-fiestas">
        <Button type="primary" >
            <LuPartyPopper />
        </Button>
    </Link>
  )
}
