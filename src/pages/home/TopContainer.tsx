/* eslint-disable max-len */
import { Button, Card, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AutocompleteSearch, { OptionType } from 'components/input/AutocompleteSearch';
import { Col, Row, Space } from 'components/layout';
import React, { useState } from 'react';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledBox = styled(Row)`
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
      <Row padding="lg">
        <Col span={24}>
          <Title level={1} style={{ color: 'white' }}>
            Find the car for you
          </Title>
        </Col>
        <Col span={24}>
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
              <Space direction="vertical">
                <Text>Pick what suits you the best:</Text>
                <AutocompleteSearch
                  fullwidth
                  placeholder="Search"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
              </Space>
            )}
            {activeTab === 'advanced' && (
              <Space direction="vertical">
                <Text>Make:</Text>
                <AutocompleteSearch
                  fullwidth
                  placeholder="Select make"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
                <Text>Model:</Text>
                <AutocompleteSearch
                  fullwidth
                  placeholder="Select model"
                  onSelect={(option) => console.log(option)}
                  options={searchOptions}
                />
                <Space align="end" direction="vertical">
                  <Button icon={<SearchOutlined />}>Search</Button>
                </Space>
              </Space>
            )}
          </Card>
        </Col>
      </Row>
    </StyledBox>
  );
};

export default TopContainer;
