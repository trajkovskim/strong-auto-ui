import { Select as AntdSelect, SelectProps, Typography } from 'antd';
import { StyledFormItem } from 'components/form/FormItem';
import { StyledWrapper, StyledWrapperProps } from 'components/form/Wrapper';
import type { FormProps } from 'components/form/types';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

const { Text } = Typography;

type Props<T> = StyledWrapperProps &
  SelectProps &
  FormProps<T> & {
    label?: string;
  };

const StyledSelect = <T extends object>({ name, form, label, maxWidth, fullWidth, ...props }: Props<T>) => {
  const setFieldValue = form?.setFieldValue;

  const handleChange = useCallback(
    (value: T) => {
      setFieldValue && setFieldValue(name, value);
    },
    [name, setFieldValue]
  );

  const GenericStyledSelect = useMemo(() => styled(AntdSelect)<SelectProps<T>>``, []);

  return (
    <StyledWrapper maxWidth={maxWidth} fullWidth={fullWidth}>
      {label && <Text>{label}</Text>}
      <StyledFormItem name={name}>
        <GenericStyledSelect theme={undefined} as={undefined} onChange={handleChange} {...props} />
      </StyledFormItem>
    </StyledWrapper>
  );
};

export default StyledSelect;
