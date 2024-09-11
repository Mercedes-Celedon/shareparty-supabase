import { Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const AddPartyButton = () => {
  return (
    <Link to="crear">
        <Button type="primary" >
          <PlusOutlined />
        </Button>
    </Link>
  )
}
