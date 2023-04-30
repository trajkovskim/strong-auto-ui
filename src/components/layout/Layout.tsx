import { Col as AntdCol, Row as AntdRow, ColProps as AntdColProps } from 'antd';
import styled, { css } from 'styled-components';
import theme from 'theme';

type StyledCommonProps = {
  padding?: keyof typeof theme.globalPadding;
  margin?: keyof typeof theme.globalPadding;
  centered?: boolean;

  spacing?: React.CSSProperties['gap'];
};

type StyledContainerProps = StyledCommonProps & {
  spacing?: React.CSSProperties['gap'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  direction?: React.CSSProperties['flexDirection'];
};

type StyledRowProps = StyledCommonProps;

type StyledColProps = StyledContainerProps & AntdColProps;

const styledCommonCss = css<StyledCommonProps>`
  padding: ${(props) => props.padding && theme.globalPadding[props.padding]} !important;
  margin: ${(props) => props.margin && theme.globalPadding[props.margin]} !important;
  margin: ${(props) => props.centered && 'auto'} !important;
  gap: ${(props) => (typeof props.spacing == 'number' ? props.spacing + 'px' : props.spacing) ?? '10px'};
`;

export const StyledContainer = styled.div<StyledContainerProps>`
  ${styledCommonCss}

  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
`;

export const StyledRow = styled(AntdRow)<StyledRowProps>`
  margin: 0 !important;
  ${styledCommonCss}
`;

export const StyledCol = styled(AntdCol)<StyledColProps>`
  padding: 0 !important;
  ${styledCommonCss}
  justify-self: ${(props) => props.justify};
  align-self: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing};

  max-width: ${(props) => props.xs && typeof props.xs == 'string' && props.xs} !important;
  display: ${(props) => props.xs && typeof props.xs == 'string' && 'flex'} !important;
  width: ${(props) => props.xs && typeof props.xs == 'string' && '100%'} !important;

  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: ${(props) => props.sm && typeof props.sm == 'string' && props.sm} !important;
    display: ${(props) => props.sm && typeof props.sm == 'string' && 'flex'} !important;
    width: ${(props) => props.sm && typeof props.sm == 'string' && '100%'} !important;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: ${(props) => props.md && typeof props.md == 'string' && props.md} !important;
    display: ${(props) => props.md && typeof props.md == 'string' && 'flex'} !important;
    width: ${(props) => props.md && typeof props.md == 'string' && '100%'} !important;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: ${(props) => props.lg && typeof props.lg == 'string' && props.lg} !important;
    display: ${(props) => props.lg && typeof props.lg == 'string' && 'flex'} !important;
    width: ${(props) => props.lg && typeof props.lg == 'string' && '100%'} !important;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: ${(props) => props.xl && typeof props.xl == 'string' && props.xl} !important;
    display: ${(props) => props.xl && typeof props.xl == 'string' && 'flex'} !important;
    width: ${(props) => props.xl && typeof props.xl == 'string' && '100%'} !important;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    max-width: ${(props) => props.xxl && typeof props.xxl == 'string' && props.xxl} !important;
    display: ${(props) => props.xxl && typeof props.xxl == 'string' && 'flex'} !important;
    width: ${(props) => props.xxl && typeof props.xxl == 'string' && '100%'} !important;
  }
`;
