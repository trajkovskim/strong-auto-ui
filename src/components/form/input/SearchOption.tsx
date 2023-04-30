import { Skeleton, Typography } from 'antd';
import { StyledCol, StyledRow } from 'components/layout';
import React from 'react';

type Props = {
  title: string;
  description: string;
  loading?: boolean;
};

const SearchOption: React.FC<Props> = (props) => {
  return (
    <Skeleton active loading={props.loading} title={false}>
      <StyledRow>
        <StyledCol span={24}>
          <Typography.Text>{props.title}</Typography.Text>
        </StyledCol>
        <StyledCol span={24}>
          <Typography.Text type="secondary">{props.description}</Typography.Text>
        </StyledCol>
      </StyledRow>
    </Skeleton>
  );
};

export default SearchOption;
