import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

export const Navbar = () => {
    return(
        <Sidebar>
            <Menu>
                <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar'><img src='/images/logo.png' /></MenuItem>
                <MenuItem component={<NavLink to="/CreateParty" activeclassname="active" />} className='navbar'> 
                    <Button type="primary"><LogoutOutlined /></Button>
                    </MenuItem>
                <MenuItem component={<NavLink to="/" activeclassname="active" />} className='navbar'>logout</MenuItem>
            </Menu>
        </Sidebar>
    )
}
