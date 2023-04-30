import { AutoComplete, AutoCompleteProps, Empty, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { StyledWrapper, StyledWrapperProps } from 'components/form/Wrapper';
import SearchOption from 'components/form/input/SearchOption';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const { Text } = Typography;

export type OptionType = {
  id: string;
  title: string;
  description: string;
};

type Props<T> = StyledWrapperProps &
  Omit<AutoCompleteProps<T>, 'options'> & {
    options: OptionType[];
    label?: string;
  };

const StyledAutocompleteSearch = <T extends object>({ fullWidth, maxWidth, label, ...props }: Props<T>) => {
  const [options, setOptions] = useState<OptionType[]>([]);

  const GenericStyledAutocomplete = useMemo(
    () => styled(AutoComplete)<AutoCompleteProps<T>>`
      width: 100%;
    `,
    []
  );

  const handleSearch = (value: string) => {
    const filteredOptions = props.options.filter(
      (option) => value && option.title?.toString().toLowerCase().startsWith(value.toLowerCase())
    );

    if (value && value.length > 1 && !filteredOptions.length) {
      setOptions([]);
      return;
    }

    setOptions(filteredOptions);
  };

  const mappedOptions: DefaultOptionType[] = options.map((option, index) => ({
    value: option.id,
    label: <SearchOption key={index} title={option.title} description={option.description} />,
  }));

  return (
    <StyledWrapper fullWidth={fullWidth} maxWidth={maxWidth}>
      {label && <Text>{label}</Text>}
      <GenericStyledAutocomplete
        theme={undefined}
        as={undefined}
        onSelect={props.onSelect}
        onSearch={handleSearch}
        placeholder={props.placeholder}
        options={!options.length ? [{ label: <Empty /> }] : mappedOptions}
        size="large"
        backfill
      />
    </StyledWrapper>
  );
};
export default StyledAutocompleteSearch;
