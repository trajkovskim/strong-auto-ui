import styled from 'styled-components';

export type StyledWrapperProps = {
  maxWidth?: string;
  fullWidth?: boolean;
};

export const StyledWrapper = styled.div<StyledWrapperProps>`
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.fullWidth || props.maxWidth) && '100%'};
`;
