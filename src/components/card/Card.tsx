import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Card as AntdCard, Button, Carousel, Image } from 'antd';
import { Col, Row } from 'components/layout';
import React, { ReactNode, useCallback } from 'react';
import styled, { css } from 'styled-components';

const StyledHeartCss = css`
  position: absolute;
  top: 10px;
  right: 10px;

  &,
  & svg {
    width: 1.5em;
    height: 1.5em;
    color: white;
    transition: all 200ms;
  }

  & svg:hover {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
`;

const StyledHeartOutlined = styled(HeartOutlined)`
  ${StyledHeartCss}
`;

const StyledHeartFilled = styled(HeartFilled)`
  ${StyledHeartCss}
`;

const StyledCard = styled(AntdCard)`
  position: relative;
`;

export type Props = {
  title?: string;
  description?: string;
  image?: string | string[];
  onClick?: () => void;
  favorite?: {
    value: boolean;
    onClick: () => void;
  };
  loading?: boolean;
};

const Card: React.FC<Props> = (props) => {
  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      event.stopPropagation();
      props.favorite?.onClick();
    },
    [props.favorite]
  );

  let images: string[] = [];
  if (props.image) {
    if (!Array.isArray(props.image)) {
      images = [props.image];
    } else {
      images = props.image;
    }
  }

  const cover: ReactNode | undefined =
    images.length === 1 ? (
      <Image alt={props.title} src={images[0]} />
    ) : (
      <Carousel effect="fade">
        {images.map((image, index) => (
          <Image key={index} alt={props.title} src={image} />
        ))}
      </Carousel>
    );

  return (
    <StyledCard loading={props.loading} hoverable cover={cover}>
      {props.favorite && !props.favorite?.value && <StyledHeartOutlined onClick={handleFavoriteClick} />}
      {props.favorite && props.favorite?.value && <StyledHeartFilled onClick={handleFavoriteClick} />}
      <Row justify="end" gutter={[12, 12]}>
        <Col span={24}>
          <AntdCard.Meta title={props.title} description={props.description} />
        </Col>
        <Col>
          <Button type="primary">View</Button>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default Card;
