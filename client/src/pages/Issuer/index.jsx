import React from 'react';
import { Box } from '@mui/material';
import ProcessSteps from '../../parts/ProcessSteps';
import FullLayout from '../../layout/FullLayout';
import VoucherCard from './VoucherCard';
import { LinkButton } from '../../components/Styles/LinkButton';
import { Wrapper } from './styles';

const Issuer = () => {
  return (
    <FullLayout>
      <Wrapper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 10
          }}
        >
          <VoucherCard />

          <LinkButton>
            Get your Tezotopia voucher
          </LinkButton>
        </Box>

        <Box sx={{ mb: 10 }}>
          <ProcessSteps activeStep={1} />
        </Box>

      </Wrapper>
    </FullLayout>
  )
};

export default Issuer;