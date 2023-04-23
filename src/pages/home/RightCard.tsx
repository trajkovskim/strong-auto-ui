import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Title } = Typography;

const StyledTitle = styled(Title)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  color: white !important;
`;

export type Props = {
  title?: string;
  image?: string;
  onClick?: () => void;
  loading?: boolean;
};

type StyledCardProps = {
  image?: string;
};

const StyledCard = styled.div<StyledCardProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: all ease 200ms;
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
  width: 100%;
  height: 100%;

  &:hover {
    scale: 102%;
    z-index: 9999;
  }
`;

const StyledCardWrapper = styled.div`
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  transform-origin: right;
  transform: scaleX(117.5%);
`;

const Card: React.FC<Props> = (props) => {
  return (
    <StyledCardWrapper>
      <StyledCard image={props.image}>{props.title && <StyledTitle level={3}>{props.title}</StyledTitle>}</StyledCard>
    </StyledCardWrapper>
  );
};

export default Card;
