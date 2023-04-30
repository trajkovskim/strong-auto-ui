import React, { useCallback } from 'react';
import { Slider, Typography } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import { StyledFormItem } from 'components/form/FormItem';
import type { FormProps } from 'components/form/types';

const { Text } = Typography;

type Props<T> = Omit<SliderRangeProps, 'range'> &
  FormProps<T> & {
    label?: string;
  };

const StyledRangeSlider = <T extends object>({ name, form, label, ...props }: Props<T>) => {
  const setFieldValue = form?.setFieldValue;
  const getFieldValue = form?.getFieldValue;

  const handleChange = useCallback(
    (value: [number, number]) => {
      setFieldValue && setFieldValue(name, value);
    },
    [name, setFieldValue]
  );

  return (
    <div>
      {label && <Text>{label}</Text>}
      <StyledFormItem name={name}>
        <Slider
          range
          {...props}
          value={props.value ?? (getFieldValue && getFieldValue(name))}
          onChange={handleChange}
          marks={{ [props.min ?? 0]: props.min ?? '0', [props.max ?? 100]: props.max ?? 100 }}
        />
      </StyledFormItem>
    </div>
  );
};

export default StyledRangeSlider;
