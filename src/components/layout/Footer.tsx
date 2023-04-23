import { FacebookFilled, InstagramOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import Space from 'components/layout/Space';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

const { Title, Text, Link: AntdLink } = Typography;

const StyledFooter = styled.footer`
  background-color: #333333;
  padding: ${theme.globalPadding.lg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled(Text)`
  color: white;
  display: block;
  max-width: 200px;
`;

const StyledTitle = styled(Title)`
  color: white !important;
`;

const StyledDivider = styled(Divider)`
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
`;

const StyledLink = styled(AntdLink)``;

const Footer: React.FC = () => {
  const facebookLink = 'https://www.facebook.com/';
  const instagramLink = 'https://www.instagram.com/';

  const languageOptions: DefaultOptionType[] = [
    { label: 'English', value: 'en' },
    { label: 'Macedonian', value: 'mk' },
  ];

  return (
    <StyledFooter>
      <Space direction="vertical">
        <Space align="stretch" size={50}>
          <Space direction="vertical">
            <Space direction="vertical" size={0}>
              <Link to="/">
                <AntdLink>Strong auto logo</AntdLink>
              </Link>
              <Link to="/autoshop">
                <AntdLink>Autoshop</AntdLink>
              </Link>
              <Link to="/rent">
                <AntdLink>Rent a car</AntdLink>
              </Link>
            </Space>
            <div>
              <StyledText>Strumuca, 1000</StyledText>
              <StyledText>North Macedonia</StyledText>
              <StyledText>+398 71 123 123</StyledText>
            </div>
          </Space>
          <StyledDivider type="vertical" />
          <div>
            <StyledTitle level={5}>Social networks</StyledTitle>
            <Space direction="vertical">
              <StyledLink href={facebookLink}>
                <Space>
                  <FacebookFilled style={{ fontSize: '24px' }} />
                  Facebook
                </Space>
              </StyledLink>
              <StyledLink href={instagramLink}>
                <Space>
                  <InstagramOutlined style={{ fontSize: '24px' }} />
                  Instagram
                </Space>
              </StyledLink>
            </Space>
          </div>
          <StyledDivider type="vertical" />
          <div>
            <StyledTitle level={5}>About us</StyledTitle>
            <StyledText>About us</StyledText>
            <StyledText>About us</StyledText>
            <StyledText>About us</StyledText>
            <StyledText>About us</StyledText>
          </div>
          <StyledDivider type="vertical" />
          <div>
            <StyledTitle level={5}>Subscribe to our newsletter</StyledTitle>
            <Input name="newsletterEmail" placeholder="Your email address" required />
            <StyledText>
              If you choose to provide us with your email address or any other personally identifiable information, we
              will use it only to send you our newsletter or respond to your query.
            </StyledText>
          </div>
        </Space>
        <Space justify="space-between">
          <div>
            <StyledText>Disclaimer</StyledText>
            <StyledText>@ 2023 strongauto.com</StyledText>
          </div>
          <Space>
            <StyledText>Language:</StyledText>
            <Select defaultValue="en" options={languageOptions} />
          </Space>
        </Space>
      </Space>
    </StyledFooter>
  );
};

export default Footer;
