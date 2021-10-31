import React from 'react';
import { Card } from 'antd';

type Date = {
  date: any;
};

const CardComponent: React.FC<Date> = ({ date }) => {
  return (
    <Card title={date?.name} bordered={true}>
      <p>{date?.area}</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};
export default CardComponent;
