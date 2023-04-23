import { Card, Divider, Image, List, Typography } from 'antd';
import { Col, Row, Space } from 'components/layout';
import React from 'react';

const { Title, Text } = Typography;

type Item = {
  image?: string;
  content?: string;
};

type Props = {
  items: Item[];
  loading?: boolean;
};

const VehicleMakeContainer: React.FC<Props> = (props) => {
  return (
    <Row>
      <Col centered>
        <Title level={3}>Vehicles make</Title>
      </Col>
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={24}>
        <List
          grid={{ gutter: 16, column: 3, xs: 1 }}
          dataSource={props.items}
          loading={props.loading}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <Card key={index} hoverable title={false}>
                  <Space direction="vertical" centered align="center">
                    <Image src={item.image} preview={false} width={120} height={120} />
                    <Text type="secondary">{item.content}</Text>
                  </Space>
                </Card>
              </List.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
};

export default VehicleMakeContainer;
