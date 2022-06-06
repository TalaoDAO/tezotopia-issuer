import React from 'react';
import { Box, Typography } from '@mui/material';
import { Wrapper } from './styles';

const VoucherCard = () => {
  return (
    <Wrapper>
      <div className="bg-left"></div>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          color: '#f4f0fa',
          mr: { xxs: '20px', xs: '60px' },
          zIndex: 2,
        }}
      >
        <img className="logo" src="/assets/img/logo-tezotopia-desktop.png" alt="" />
        <Typography sx={{ fontSize: { xxs: '26px', xs: '32px' }, lineHeight: 1 }}>
          Voucher
        </Typography>
        <Typography sx={{ fontSize: { xxs: '26px', xs: '32px' }, lineHeight: 1 }}>
          Card
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          color: '#feea00',
          zIndex: 2,
          pt: '10px',
          textShadow: '0 0 30px #7452ad'
        }}
      >
        <Typography
          sx={{
            fontSize: { xxs: '90px', xs: '120px' },
            lineHeight: 0.875
          }}
        >
          5
        </Typography>
        <div>
          <Typography
            sx={{ fontSize: { xxs: '36px', xs: '48px' }, lineHeight: 1.1 }}
          >
            %
          </Typography>
          <Typography
            sx={{
              fontSize: { xxs: '18px', xs: '26px' },
              lineHeight: 1.1
            }}
          >
            OFF
          </Typography>
        </div>
        <Typography sx={{ fontSize: '48px', lineHeight: 1.1 }}>
          *
        </Typography>
      </Box>
    </Wrapper>
  )
};

export default VoucherCard;