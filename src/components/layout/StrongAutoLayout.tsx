import { FloatButton, Watermark } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import React from 'react';

type Props = React.PropsWithChildren;
const StrongAutoLayout: React.FC<Props> = (props) => {
  const handleBackToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  };

  return (
    <Watermark zIndex={-1} content="Strong auto">
      <Header />
      <main>{props.children}</main>
      <Footer />
      <FloatButton icon={<ToTopOutlined />} onClick={handleBackToTop} />
    </Watermark>
  );
};

export default StrongAutoLayout;
