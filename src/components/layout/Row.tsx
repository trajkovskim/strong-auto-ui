import React from 'react';
import { Row as AntdRow } from 'antd';
import styled from 'styled-components';
import theme from 'theme';

type StyledRowProps = {
  padding?: keyof typeof theme.globalPadding;
  margin?: keyof typeof theme.globalPadding;
  centered?: boolean;
  direction?: 'row' | 'column';
};

const StyledRow = styled(AntdRow)<StyledRowProps>`
  padding: ${(props) => props.padding && theme.globalPadding[props.padding]};
  margin: ${(props) => props.margin && theme.globalPadding[props.margin]};
  margin: ${(props) => props.centered && 'auto'};
  flex-direction: ${(props) => props.direction};
`;

const Row = StyledRow;

export default Row;
