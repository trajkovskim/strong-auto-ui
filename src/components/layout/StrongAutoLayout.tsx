import React from 'react';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

type Props = React.PropsWithChildren;
const StrongAutoLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default StrongAutoLayout;
