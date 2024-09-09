import { NavLink } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {HomeOutlined,UserOutlined,SettingOutlined,} from '@ant-design/icons';
import { AddPartyButton } from '../buttons/AddPartyButton';
import { MyInvitationsButton } from '../buttons/MyInvitationsButton';
import { LogOutButton } from '../buttons/LogOutButton';
  
  const { Header } = Layout;

export const Navbar = () => {
    //const { userId } = useAuth();
    return(
        <Layout className="layout">
            <Header>
                <div className="logo" style={{ color: 'white' }}>
                    <NavLink to="/" activeclassname="active">
                        <img src='/images/logo-share-party-white.png' />
                    </NavLink>
                </div>
                <div>
                    <AddPartyButton />
                    <MyInvitationsButton />
                    <LogOutButton />
                </div>
            </Header>
        </Layout>
    )
}
