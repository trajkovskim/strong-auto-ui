import React from 'react';
import Card, { Props as CardProps } from 'components/card/Card';
import { Button, List, Typography } from 'antd';
import styled from 'styled-components';
const { Title } = Typography;

const StyledButton = styled(Button)`
  border-top: 1px solid gainsboro;
  border-radius: 0;
`;

export type Props = {
  title?: string;
  cards: CardProps[];
  loading?: boolean;
  onLoadMore?: () => void;
};

const CardsContainer: React.FC<Props> = ({ onLoadMore, ...props }) => {
  return (
    <List
      loading={props.loading}
      grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 3, lg: 3 }}
      dataSource={props.cards}
      header={props.title && <Title level={3}>{props.title}</Title>}
      loadMore={
        onLoadMore && (
          <StyledButton block type="text" onClick={onLoadMore}>
            Load more
          </StyledButton>
        )
      }
      renderItem={(card, index) => {
        return (
          <List.Item>
            <Card key={index} {...card} />
          </List.Item>
        );
      }}
    />
  );
};

export default CardsContainer;
