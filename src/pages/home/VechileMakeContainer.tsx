import { css } from '@emotion/css';
import { Card, Image, List, Typography } from 'antd';
import { StyledContainer } from 'components/layout';
import React from 'react';
import styled from 'styled-components';

const { Title, Text } = Typography;

type Item = {
  image?: string;
  content?: string;
};

type Props = {
  items: Item[];
  loading?: boolean;
  className?: string;
};

const StyledDiv = styled.div`
  background-color: gainsboro;
  padding: 1rem;
`;

const VehicleMakeContainer: React.FC<Props> = (props) => {
  const className = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  return (
    <StyledDiv>
      <List
        className={`${className} ${props.className}`}
        grid={{ gutter: 16, column: 5, xs: 1 }}
        dataSource={props.items}
        loading={props.loading}
        header={<Title level={3}>Vehicles make</Title>}
        renderItem={(item, index) => {
          return (
            <List.Item>
              <Card key={index} hoverable title={false}>
                <StyledContainer direction="column" centered align="center">
                  <Image src={item.image} preview={false} width={120} height={120} />
                  <Text type="secondary">{item.content}</Text>
                </StyledContainer>
              </Card>
            </List.Item>
          );
        }}
      />
    </StyledDiv>
  );
};

export default VehicleMakeContainer;
