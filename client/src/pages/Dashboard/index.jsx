import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ProcessSteps from '../../parts/ProcessSteps';
import QrCode from '../../components/QrCode';
import FullLayout from '../../layout/FullLayout';
import API from '../../api';
import { Wrapper } from './styles';
import { LinkButton } from "../../components/Styles/LinkButton";

const Dashboard = () => {
  const { voucherId } = useParams();
  const [qrUrl, setQRUrl] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);

  const activate = () => {
    setShowQrCode(true);
  };

  useEffect(() => {
    if (voucherId) {
      API.vouchers.getQRUrl(voucherId)
        .then((res) => {
          const { data = {} } = res;
          if (data.success) {
            setQRUrl(data.data);
          }
        })
        .catch((err) => {

        })
    }
  }, [voucherId]);

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

        {
          showQrCode ? (
            <>
              <Typography
                sx={{ color: '#fff', mb: 1, textAlign: 'center' }}
              >
                Scan to download
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <QrCode value={qrUrl} />
              </Box>
            </>
          ) : (
            <LinkButton onClick={activate}>
              Activate
            </LinkButton>
          )
        }
      </Wrapper>
    </FullLayout>
  );
};

export default Dashboard;