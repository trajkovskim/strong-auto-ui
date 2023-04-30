import { Form, FormItemProps } from 'antd';
import React, { useMemo } from 'react';
import styled from 'styled-components';

export const StyledFormItem = <T extends object>(props: FormItemProps<T>) => {
  const GenericStyledFormItem = useMemo(
    () => styled(Form.Item)<FormItemProps<T>>`
      margin: 0;
    `,
    []
  );

  return <GenericStyledFormItem as={undefined} theme={undefined} {...props} />;
};
