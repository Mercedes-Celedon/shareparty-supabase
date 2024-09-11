import { Button } from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { btn } from '../ComponentsStyles';

export const RegisterButton = () => {
  return (
    <Link to="/registrar"style={btn}>
      <Button type="primary" size="large" block>
            Registrate
        </Button>
    </Link>
  )
}
