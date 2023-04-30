import { CardProps, CardsContainer } from 'components/card';
import { StyledCol, StyledRow } from 'components/layout';
import ClassificationContainer from 'pages/home/ClassificationContainer';
import LeftCard from 'pages/home/LeftCard';
import RightCard from 'pages/home/RightCard';
import TopContainer from 'pages/home/TopContainer';
import VehicleMakeContainer from 'pages/home/VechileMakeContainer';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [favorite, setFavorite] = useState(false);

  const newVehiclesCards: CardProps[] = [
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
      favorite: {
        value: favorite,
        onClick: () => {
          setFavorite(!favorite);
        },
      },
    },
    {
      title: 'Audi RS7',
      description: 'Good condition',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
      favorite: {
        value: true,
        onClick: () => {
          console.log();
        },
      },
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
    <StyledRow spacing={0}>
      <StyledCol span={24}>
        <TopContainer />
      </StyledCol>
      <StyledCol span={24} centered>
        <div style={{ position: 'relative', height: '40em' }}>
          <LeftCard
            title="Autoshop"
            image="https://149626786.v2.pressablecdn.com/wp-content/uploads/3O2A0363-SMALL.jpg"
            onClick={() => {
              console.log('Autoshop');
            }}
          />
          <RightCard
            title="Rent a car"
            image="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
            onClick={() => {
              console.log('Autoshop');
            }}
          />
        </div>
      </StyledCol>
      <StyledCol span={24}>
        <ClassificationContainer
          items={[
            { title: 'City vehicles', description: 'description' },
            { title: 'Sport vehicles', description: 'description' },
            { title: 'Compact vehicles', description: 'description' },
            { title: 'Family vehicles', description: 'description' },
          ]}
        />
      </StyledCol>
      <StyledCol span={24}>
        <VehicleMakeContainer
          items={[
            {
              content: 'Audi',
              image:
                // eslint-disable-next-line max-len
                'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
            },
            {
              content: 'BMW',
              image:
                // eslint-disable-next-line max-len
                'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
            },
            {
              content: 'Audi',
              image:
                // eslint-disable-next-line max-len
                'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
            },
            {
              content: 'Audi',
              image:
                // eslint-disable-next-line max-len
                'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
            },
          ]}
        />
      </StyledCol>
      <StyledCol span={24} xl={16} centered padding="xs">
        <CardsContainer cards={newVehiclesCards} onLoadMore={() => console.log()} title="New vehicles" />
      </StyledCol>
      <StyledCol span={24} xl={16} centered padding="xs">
        <CardsContainer cards={newVehiclesCards} title="Mostly viewed" />
      </StyledCol>
      <StyledCol span={24} xl={16} centered padding="xs">
        <CardsContainer cards={newVehiclesCards} title="Rent vehicles" />
      </StyledCol>
      {/* <Col span={6} padding="md">
        <Col span={24}>
          <List title="Recent activities" items={activities} />
        </Col>
        <Col span={24}>
          <List title="Reviews" items={reviews} />
        </Col>
      </Col> */}
    </StyledRow>
  );
};

export default Home;
