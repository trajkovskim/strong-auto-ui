import { Skeleton, Typography } from 'antd';
import { Col, Row } from 'components/layout';
import React from 'react';

type Props = {
  title: string;
  description: string;
  loading?: boolean;
};
const SearchOption: React.FC<Props> = (props) => {
  return (
    <Skeleton active loading={props.loading} title={false}>
      <Row>
        <Col span={24}>
          <Typography.Text>{props.title}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">{props.description}</Typography.Text>
        </Col>
      </Row>
    </Skeleton>
  );
};

export default SearchOption;
