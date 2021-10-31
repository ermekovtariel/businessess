import React from 'react';
import { Card } from 'antd';

import './Card.scss';

type Date = {
  date: any;
};

const CardComponent: React.FC<Date> = ({ date }) => {
  return (
    <Card title={date?.name} bordered={true}>
      <p>area:{'  ' + date?.area}</p>
      <p>company_size:{'  ' + date?.company_size}</p>
      <p>legal_form:{'  ' + date?.legal_form}</p>
    </Card>
  );
};
export default CardComponent;
