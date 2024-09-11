import { NavLink } from 'react-router-dom';
import { Layout, Row,Col,Flex } from 'antd';
import { AddPartyButton } from '../buttons/AddPartyButton';
import { MyInvitationsButton } from '../buttons/MyInvitationsButton';
import { LogOutButton } from '../buttons/LogOutButton';
import { navbar } from '../ComponentsStyles';
  const { Header } = Layout;

export const Navbar = () => {
    //const { userId } = useAuth();
    return(
        <Header style={navbar}>
            <Row gutter={[24]}>
            <Flex gap="middle" justify="center" align='center'>
                <Col span={8} style={{ padding:'10px 0'}}>
                    <Flex gap="middle" justify="center" align='center'>
                        <img style={{ width:'50%'}} src='/images/icon.png' />
                    </Flex>
                </Col>
                <Col span={16} >
                    <Flex gap="middle" justify="center" align='center'>
                        <AddPartyButton />
                        <MyInvitationsButton />
                        <LogOutButton />
                    </Flex>
                </Col>
             </Flex>       
            </Row>
        </Header>
        
    )
}
