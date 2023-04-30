import { MenuOutlined } from '@ant-design/icons';
import { CheckboxOptionType, Drawer, Form } from 'antd';
import { CardProps, CardsContainer } from 'components/card';
import { StyledForm, StyledRadioGroup, StyledRangeSlider, StyledSelect } from 'components/form';
import { StyledCol, StyledContainer, StyledRow } from 'components/layout';
import React, { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type FilterFormData = {
  make?: string;
  model?: string;
  price?: [number, number];
  transmission?: string;
};

const Autoshop: React.FC = () => {
  const [form] = Form.useForm<FilterFormData>();
  const [drawer, setDrawer] = useState(true);

  useEffect(() => {
    form.setFieldsValue({ price: [0, 100000] });
  }, [form]);

  const handleSubmit = useCallback((values: FilterFormData) => console.log(values), []);

  const newVehiclesCards: CardProps[] = [
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    },
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    },
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    },
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    },
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    },
  ];

  const makeOptions = [
    {
      label: 'Audi',
      value: 'Audi',
    },
  ];
  const transmissionOptions: CheckboxOptionType[] = [
    {
      label: 'Automatic',
      value: 'AUTOMATIC',
    },
    {
      label: 'Manual',
      value: 'MANUAL',
    },
  ];

  const sortOptions = [
    {
      label: 'Price (Low)',
      value: 'PRICE_LOW',
    },
    {
      label: 'Price (High)',
      value: 'PRICE_HIGH',
    },
  ];

  const filterForm = (
    <StyledForm form={form} onFinish={handleSubmit}>
      <StyledSelect form={form} name="make" label="Make: " size="large" options={makeOptions} fullWidth />
      <StyledSelect form={form} name="model" label="Model: " size="large" options={makeOptions} fullWidth />
      <StyledRadioGroup
        form={form}
        size="large"
        name="transmission"
        label="Transmission"
        options={transmissionOptions}
        fullWidth
      />
      <StyledRangeSlider form={form} name="price" label="Price" min={100} max={100000} />
    </StyledForm>
  );

  return (
    <StyledContainer direction="column" spacing={10} padding="xs">
      <StyledContainer justify="space-between" align="center">
        {/* <Drawer placement="left" closable onClose={() => setDrawer(false)} open={drawer}>
          {filterForm}
        </Drawer> */}
        <MenuOutlined onClick={() => setDrawer(true)} />
        <StyledSelect maxWidth="200px" form={form} size="large" name="sort" label="Sort: " options={sortOptions} />
      </StyledContainer>
      <StyledRow wrap={false} spacing={10}>
        <StyledCol xs={0} md="400px">
          {filterForm}
        </StyledCol>
        <StyledCol>
          <CardsContainer cards={newVehiclesCards} />
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};

export default Autoshop;
