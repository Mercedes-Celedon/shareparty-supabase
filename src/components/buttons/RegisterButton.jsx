import { Button } from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { btn } from '../ComponentsStyles';

export const RegisterButton = () => {
  return (
    <Link to="/registrar">
        <Button type="primary" style={btn}>
            Registrate
        </Button>
    </Link>
  )
}
