import { Radio, RadioChangeEvent, Typography } from 'antd';
import React, { useCallback } from 'react';

import type { RadioGroupProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { StyledFormItem } from 'components/form/FormItem';
import { FormProps } from 'components/form/types';
import { StyledWrapper, StyledWrapperProps } from 'components/form/Wrapper';
import styled from 'styled-components';

const { Text } = Typography;

const BaseStyledRadioGroup = styled(Radio.Group)`
  display: flex;
  > * {
    flex: 1;
  }
`;

type Props<T> = React.ComponentProps<typeof BaseStyledRadioGroup> &
  Omit<RadioGroupProps, 'name'> &
  StyledWrapperProps &
  FormProps<T> & {
    fullWidth?: boolean;
    label?: string;
  };

const StyledRadioGroup = <T extends object>({
  name,
  options,
  form,
  label,
  fullWidth,
  maxWidth,
  ...props
}: Props<T>) => {
  const setFieldValue = form?.setFieldValue;
  const getFieldValue = form?.getFieldValue;

  const handleChange = useCallback(
    (event: RadioChangeEvent) => {
      setFieldValue && setFieldValue(name, event.target.value);
    },
    [name, setFieldValue]
  );

  const handleOptionClick = useCallback(
    (value: CheckboxValueType) => {
      if (getFieldValue && getFieldValue(name) == value) {
        setFieldValue && setFieldValue(name, undefined);
      }
    },
    [getFieldValue, name, setFieldValue]
  );

  return (
    <StyledWrapper fullWidth={fullWidth} maxWidth={maxWidth}>
      {label && <Text>{label}</Text>}
      <StyledFormItem name={name}>
        <BaseStyledRadioGroup theme={undefined} as={undefined} onChange={handleChange} {...props}>
          {(options ?? []).map((option, index) => {
            const value = typeof option === 'object' ? option.value : option;
            const label = typeof option === 'object' ? option.label : option;
            return (
              <Radio.Button key={index} value={value} onClick={() => handleOptionClick(value)}>
                {label}
              </Radio.Button>
            );
          })}
        </BaseStyledRadioGroup>
      </StyledFormItem>
    </StyledWrapper>
  );
};

export default StyledRadioGroup;
