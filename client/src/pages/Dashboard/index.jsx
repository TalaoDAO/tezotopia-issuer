import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ProcessSteps from '../../parts/ProcessSteps';
import QrCode from '../../components/QrCode';
import FullLayout from '../../layout/FullLayout';
import API from '../../api';
import { Wrapper } from './styles';
import { LinkButton } from "../../components/Styles/LinkButton";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const { voucherId } = useParams();
  const [qrUrl, setQRUrl] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const navigate = useNavigate();

  const activate = () => {
    if (qrUrl) {
      setShowQrCode(true);
    }
  };

  useEffect(() => {
    if (voucherId) {
      API.issuer.getQRUrl(voucherId)
        .then((res) => {
          const { data = {} } = res;
          if (data.success) {
            setQRUrl(data.data);
          }
        })
        .catch((err) => {
          navigate('/');
        })
    } else {
      navigate('/');
    }
  }, [voucherId]);

  return (
    <FullLayout>
      <Wrapper>
        <Box sx={{ mb: 5 }}>
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

          <div className="download-section">
            <img className="download-img" src="/assets/img/google-play.png" alt="" />
            <img className="download-img" src="/assets/img/app-store.png" alt="" />
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
              <Typography
                sx={{ color: '#aaa', mt: 6, textAlign: 'center' }}
              >
                *only for primary sales
              </Typography>
            </>
          ) : (
            <>
              <LinkButton className="d-lg-none">
                <a className="text-decoration-none text-dark" href="https://app.altme.io/app/download?uri=">Open AltMe wallet</a>
              </LinkButton>
              <LinkButton className="d-none d-lg-block" onClick={activate}>
                Activate
              </LinkButton>
            </>
          )
        }
      </Wrapper>
    </FullLayout>
  );
};

export default Dashboard;