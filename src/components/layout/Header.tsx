import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Image, Typography } from 'antd';
import Space from 'components/layout/Space';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Link: AntdLink } = Typography;

const StyledHeader = styled.header`
  padding-left: 2rem;
  border-bottom: 1px solid rgba(192, 192, 192, 0.6);
  z-index: 9999;
  background-color: #333333;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: rgba(192, 192, 192, 0.6);
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(AntdLink)`
  color: black !important;
  text-decoration: none !important;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledHeader>
        <Link to="/" id="logo">
          <Image alt="Logo" height={50} preview={false} />
        </Link>
      </StyledHeader>
      <StyledNav>
        <Space>
          <StyledLink onClick={() => navigate('/autoshop')}>Autoshop</StyledLink>
          <StyledLink onClick={() => navigate('/rent')}>Rent</StyledLink>
        </Space>
        <Space size={25}>
          <HeartOutlined style={{ fontSize: '20px' }} />
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
        </Space>
      </StyledNav>
    </>
  );
};
export default Header;
