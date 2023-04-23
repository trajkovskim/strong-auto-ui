import { Select } from 'antd';
import { CardProps, CardsContainer } from 'components/card';
import { Space } from 'components/layout';
import React from 'react';
import styled from 'styled-components';

const StyledSider = styled.div`
  min-width: 200px;
  max-width: 300px;
  overflow-y: auto;
`;

const Autoshop: React.FC = () => {
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

  return (
    <Space padding="xs" align="start">
      <StyledSider>
        <Select options={[]} />
        <div>sjdofajo</div>
        <div>sjdofajo</div>
      </StyledSider>
      <CardsContainer cards={newVehiclesCards} />
    </Space>
  );
};

export default Autoshop;
