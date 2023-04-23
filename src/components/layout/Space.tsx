import { Space as AntdSpace } from 'antd';
import styled from 'styled-components';
import theme from 'theme';

type StyledSpaceProps = {
  padding?: keyof typeof theme.globalPadding;
  margin?: keyof typeof theme.globalPadding;
  centered?: boolean;
  align?: 'start' | 'end' | 'center' | 'stretch';
  justify?: 'space-between' | 'start' | 'end' | 'center';
};

const StyledSpace = styled(AntdSpace)<StyledSpaceProps>`
  padding: ${(props) => props.padding && theme.globalPadding[props.padding]};
  margin: ${(props) => props.margin && theme.globalPadding[props.margin]};
  margin: ${(props) => props.centered && 'auto'};
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

const Space = StyledSpace;

export default Space;
