import { Avatar, Divider, List, Space, Typography } from 'antd';
import { Col, Row } from 'components/layout';
import React from 'react';
import styled from 'styled-components';

const { Title, Text } = Typography;

type Category = {
  title: string;
  description?: string;
};

type Props = {
  items: Category[];
  loading?: boolean;
};

const StyledTitle = styled(Text)`
  font-size: 20px;
`;

const ClassificationContainer: React.FC<Props> = (props) => {
  return (
    <Row padding="lg">
      <Col centered>
        <Title level={3}>Vehicles Classification</Title>
      </Col>
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={24}>
        <List
          grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 2 }}
          dataSource={props.items}
          loading={props.loading}
          renderItem={(item) => {
            return (
              <List.Item>
                <Space align="center">
                  <Avatar shape="square" size={100} />
                  <Space direction="vertical" size={0}>
                    <StyledTitle>{item.title}</StyledTitle>
                    <Text type="secondary">{item.description}</Text>
                  </Space>
                </Space>
              </List.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
};

export default ClassificationContainer;
