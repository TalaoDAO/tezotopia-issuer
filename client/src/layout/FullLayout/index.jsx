import React from 'react';
import Container from '../../components/Container';
import { Wrapper } from './styles';
import { PropTypes } from "prop-types";

const FullLayout = ({ children, isVoucherMobile }) => {
  return (
    <Wrapper className={isVoucherMobile && "mobile-container"}>
      <Container>
        <div className="logo-wrapper" style={{justifyContent: isVoucherMobile && 'start'}}>
          <img className="logo" src="/assets/img/logo-tezotopia-desktop.png" alt="" />
        </div>

        {children}
      </Container>
    </Wrapper>
  );
};

FullLayout.propTypes = {
  isVoucherMobile: PropTypes.bool.isRequired
}

export default FullLayout;
