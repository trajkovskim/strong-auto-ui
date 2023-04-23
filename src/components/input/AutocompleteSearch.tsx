import React, { useState } from 'react';
import { AutoComplete, Empty } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import SearchOption from 'components/input/SearchOption';

export type OptionType = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  options: OptionType[];
  placeholder?: string;
  onSelect?: (option: DefaultOptionType) => void;
  fullwidth?: boolean;
  loading?: boolean;
};
const AutocompleteSearch: React.FC<Props> = (props) => {
  const [options, setOptions] = useState<OptionType[]>([]);

  const mappedOptions: DefaultOptionType[] = !options.length
    ? [{ label: <Empty /> }]
    : options.map((option) => ({
        value: option.id,
        label: <SearchOption title={option.title} description={option.description} />,
      }));

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

  return (
    <AutoComplete
      style={{ width: props.fullwidth ? '100%' : undefined }}
      onSelect={props.onSelect}
      onSearch={handleSearch}
      placeholder={props.placeholder}
      options={mappedOptions}
      size="large"
      backfill
    />
  );
};
export default AutocompleteSearch;
