import React from 'react';
import { Box } from '@mui/material';
import ProcessSteps from '../../parts/ProcessSteps';
import FullLayout from '../../layout/FullLayout';
import VoucherCard from './VoucherCard';
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

          <button className="voucher-btn">
            Get your Tezotopia voucher
          </button>
        </Box>

        <Box sx={{ mb: 10 }}>
          <ProcessSteps activeStep={1} />
        </Box>

      </Wrapper>
    </FullLayout>
  )
};

export default Issuer;