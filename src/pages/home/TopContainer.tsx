/* eslint-disable max-len */
import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import StyledAutocompleteSearch, { OptionType } from 'components/form/input/AutocompleteSearch';
import { StyledCol, StyledContainer, StyledRow } from 'components/layout';
import React, { useState } from 'react';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledBox = styled(StyledRow)`
  height: 600px;
  background-image: url('https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?s=2048x2048&w=is&k=20&c=IG4VlgJ9eN3od_gGzyfFvsAf4WPWO2SfIxByaHarf8M=');
`;

const TopContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('simple');

  const searchOptions: OptionType[] = [
    {
      id: '12',
      title: 'Audi RS7',
      description: 'Audi RS7 desc',
    },
    {
      id: '13',
      title: 'Audi RS7',
      description: 'Audi RS7 desc',
    },
    {
      id: '14',
      title: 'Audi RS7',
      description: 'Audi RS7 desc',
    },
  ];

  return (
    <StyledBox>
      <StyledRow padding="lg">
        <StyledCol span={24}>
          <Title level={1} style={{ color: 'white' }}>
            Find the car for you
          </Title>
        </StyledCol>
        <StyledCol span={24}>
          <Card
            activeTabKey={activeTab}
            style={{ maxWidth: '500px' }}
            tabList={[
              {
                key: 'simple',
                tab: <Text>Simple search</Text>,
              },
              {
                key: 'advanced',
                tab: <Text>Advanced search</Text>,
              },
            ]}
            bordered
            onTabChange={(tab) => setActiveTab(tab)}
          >
            {activeTab === 'simple' && (
              <StyledContainer direction="column">
                <Text>Pick what suits you the best:</Text>
                <StyledAutocompleteSearch
                  fullwidth
                  placeholder="Search"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
              </StyledContainer>
            )}
            {activeTab === 'advanced' && (
              <StyledContainer direction="column">
                <Text>Make:</Text>
                <StyledAutocompleteSearch
                  fullwidth
                  placeholder="Select make"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
                <Text>Model:</Text>
                <StyledAutocompleteSearch
                  fullwidth
                  placeholder="Select model"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
                <StyledContainer align="end" direction="column">
                  <Button icon={<SearchOutlined />}>Search</Button>
                </StyledContainer>
              </StyledContainer>
            )}
          </Card>
        </StyledCol>
      </StyledRow>
    </StyledBox>
  );
};

export default TopContainer;
