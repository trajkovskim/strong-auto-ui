import { css } from '@emotion/css';
import { Avatar, List, Space, Typography } from 'antd';
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
  className?: string;
};

const StyledTitle = styled(Text)`
  font-size: 20px;
`;

const StyledDiv = styled.div`
  background-color: gainsboro;
  padding: 1rem;
`;

const ClassificationContainer: React.FC<Props> = (props) => {
  const className = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  return (
    <StyledDiv>
      <List
        size="large"
        className={`${className} ${props.className}`}
        grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 2 }}
        dataSource={props.items}
        loading={props.loading}
        header={<Title level={3}>Vehicles Classification</Title>}
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
    </StyledDiv>
  );
};

export default ClassificationContainer;
