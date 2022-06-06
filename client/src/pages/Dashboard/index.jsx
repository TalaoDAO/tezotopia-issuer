import React from 'react';
import { Box, Typography } from '@mui/material';
import ProcessSteps from '../../parts/ProcessSteps';
import QrCode from '../../components/QrCode';
import FullLayout from '../../layout/FullLayout';
import { Wrapper } from './styles';

const Dashboard = () => {
  return (
    <FullLayout>
      <Wrapper>
        <Box sx={{ mb: 10 }}>
          <div className="title-container">
            <img className="unit-img" src="/assets/img/unit-left-tablet.png" alt="" />

            <Box
              sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mx: 'auto' }}
            >
              <Typography
                className="title"
                sx={{ color: '#fbd400' }}

              >
                5% discount
              </Typography>

              <Typography
                className="title"
                sx={{ color: '#fff' }}
              >
                on NFTs*
              </Typography>
            </Box>

            <img className="unit-img" src="/assets/img/unit-right-tablet.png" alt="" />
          </div>
        </Box>

        <Box sx={{ mb: 10 }}>
          <ProcessSteps />
        </Box>

        <Typography
          sx={{ color: '#fff', mb: 1, textAlign: 'center' }}
        >
          Scan to download
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <QrCode />
        </Box>
      </Wrapper>
    </FullLayout>
  );
};

export default Dashboard;