import { FacebookFilled, InstagramOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { StyledContainer } from 'components/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Text, Link: AntdLink } = Typography;

const StyledFooter = styled.footer`
  background-color: #333333;
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
      <StyledContainer direction="column" align="center" padding="md">
        <StyledContainer align="stretch" spacing={50}>
          <StyledContainer direction="column">
            <StyledContainer direction="column" spacing={0}>
              <Link to="/">
                <AntdLink>Strong auto logo</AntdLink>
              </Link>
              <Link to="/autoshop">
                <AntdLink>Autoshop</AntdLink>
              </Link>
              <Link to="/rent">
                <AntdLink>Rent a car</AntdLink>
              </Link>
            </StyledContainer>
            <div>
              <StyledText>Strumuca, 1000</StyledText>
              <StyledText>North Macedonia</StyledText>
              <StyledText>+398 71 123 123</StyledText>
            </div>
          </StyledContainer>
          <StyledDivider type="vertical" />
          <div>
            <StyledTitle level={5}>Social networks</StyledTitle>
            <StyledContainer direction="column">
              <StyledLink href={facebookLink}>
                <StyledContainer>
                  <FacebookFilled style={{ fontSize: '24px' }} />
                  Facebook
                </StyledContainer>
              </StyledLink>
              <StyledLink href={instagramLink}>
                <StyledContainer>
                  <InstagramOutlined style={{ fontSize: '24px' }} />
                  Instagram
                </StyledContainer>
              </StyledLink>
            </StyledContainer>
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
        </StyledContainer>
      </StyledContainer>
      <StyledContainer justify="space-between" padding="xs">
        <div>
          <StyledText>Disclaimer</StyledText>
          <StyledText>@ 2023 strongauto.com</StyledText>
        </div>
        <StyledContainer>
          <StyledText>Language:</StyledText>
          <Select defaultValue="en" options={languageOptions} />
        </StyledContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
