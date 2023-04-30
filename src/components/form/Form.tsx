import { Form, FormProps } from 'antd';
import React, { useMemo } from 'react';
import styled, { StyledProps } from 'styled-components';

export const StyledForm = <T extends object>(props: FormProps<T>) => {
  const GenericStyledForm = useMemo(
    () => styled(Form)<StyledProps<FormProps<T>>>`
      width: 100%;
    `,
    []
  );

  return <GenericStyledForm as={undefined} theme={undefined} {...props} />;
};
