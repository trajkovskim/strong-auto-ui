import React from 'react';
import Card, { Props as CardProps } from 'components/card/Card';
import { Col, Row } from 'components/layout';
import { List, Typography } from 'antd';
const { Title } = Typography;

export type Props = {
  title?: string;
  cards: CardProps[];
  loading?: boolean;
};

const CardsContainer: React.FC<Props> = (props) => {
  const list = (
    <List
      loading={props.loading}
      grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 3, lg: 3 }}
      dataSource={props.cards}
      renderItem={(card, index) => {
        return (
          <List.Item>
            <Card key={index} {...card} />
          </List.Item>
        );
      }}
    />
  );

  if (!props.title) {
    return list;
  }

  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>{props.title && <Title level={3}>{props.title}</Title>}</Col>
      <Col span={24}>{list}</Col>
    </Row>
  );
};

export default CardsContainer;
