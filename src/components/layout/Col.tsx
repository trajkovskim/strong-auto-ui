import React from 'react';
import { Col as AntdCol } from 'antd';
import styled from 'styled-components';
import theme from 'theme';

type StyledColProps = {
  padding?: keyof typeof theme.globalPadding;
  margin?: keyof typeof theme.globalPadding;
  centered?: boolean;
  spacing?: number;
  align?: 'start' | 'end' | 'center';
  justify?: 'space-between' | 'start' | 'end' | 'center';
};

const StyledCol = styled(AntdCol)<StyledColProps>`
  padding: ${(props) => props.padding && theme.globalPadding[props.padding]};
  margin: ${(props) => props.margin && theme.globalPadding[props.margin]};
  margin: ${(props) => props.centered && 'auto'};
  gap: ${(props) => props.spacing}px;
  align-self: ${(props) => props.align};
  justify-self: ${(props) => props.justify};
`;

const Col = StyledCol;

export default Col;
