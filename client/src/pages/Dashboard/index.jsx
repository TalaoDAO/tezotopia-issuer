import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProcessSteps from "../../parts/ProcessSteps";
import QrCode from "../../components/QrCode";
import FullLayout from "../../layout/FullLayout";
import API from "../../api";
import { Wrapper } from "./styles";
import { LinkButton } from "../../components/Styles/LinkButton";
import socketIOClient from "socket.io-client";
import Success from "../../components/Success";
import MobileDashboard from "../../components/MobileDashboard";

const Dashboard = () => {
  const { voucherId } = useParams();
  const [qrUrl, setQRUrl] = useState('');
  const socket = socketIOClient(process.env.REACT_APP_SOCKET_URL);
  const [showQrCode, setShowQrCode] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMembership, setIsMembership] = useState(false);
  const [isVoucherMobile, setIsVoucherMobile] = useState(false);
  const [voucher, setVoucher] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('authorised', function (isAuthorized) {
      setLoggedIn(isAuthorized)
    })
  }, []);

  const activate = () => {
    if (qrUrl) {
      setShowQrCode(true);
    }
  };

  useEffect(() => {
    if (voucherId) {
      if (voucherId.includes('membership')) setIsMembership(true);
      if (voucherId.includes('voucher_mobile')) setIsVoucherMobile(true);
      API.issuer.getQRUrl(voucherId)
        .then((res) => {
          const { data = {} } = res;
          if (data.success) {
            setQRUrl(data.data.url);
            setVoucher(data.data.voucher)

            console.log('rabbi', data.data.voucher);
            setInterval(function () {
              socket.emit('check-status', data.data.user.session_id)
            }, 2000);
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
    <FullLayout isVoucherMobile={isVoucherMobile}>
      <Wrapper>
        {isVoucherMobile ? <MobileDashboard />: <Box sx={{ mb: 5 }}>
          <div className="title-container">
            <img className="unit-img" src="/assets/img/unit-left-tablet.png" alt="" />

            <Box
              sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mx: 'auto' }}
            >
              <Typography
                className="title"
                sx={{ color: '#fbd400' }}

              >
                {voucher && voucher.credentialSubject.offers[0].benefit.discount} discount
              </Typography>

              <Typography
                className="title"
                sx={{color: isMembership ? '#fbd400' : '#fff'}}
              >
                {isMembership ? 'for 1 years' : 'on NFTs*'}
              </Typography>

              {isMembership && <Typography
                fontSize={40}
                sx={{color: '#fff', fontWeight: 500, marginTop: 2}}
              >
                on all NFT purchases*
              </Typography>}
            </Box>

            <img className="unit-img" src="/assets/img/unit-right-tablet.png" alt="" />
          </div>

          <div className="download-section">
            <img className="download-img" src="/assets/img/google-play.png" alt="" />
            <img className="download-img" src="/assets/img/app-store.png" alt="" />
          </div>
        </Box>}

        <Box sx={{ mb: 10 }}>
          <ProcessSteps isVoucherMobile={isVoucherMobile}/>
        </Box>

        {
          isLoggedIn ? <Success isMembership={isMembership} /> :
            showQrCode ? (
              <>
                <Typography
                  sx={{ color: "#fff", mb: 1, textAlign: "center" }}
                >
                  Scan to download
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <QrCode value={qrUrl} />
                </Box>
                <Typography
                  sx={{ color: "#aaa", mt: 6, textAlign: "center" }}
                >
                  *only for primary sales
                </Typography>
              </>
            ) : (
              <>
                <LinkButton className="d-lg-none">
                  <a className="text-decoration-none text-dark" href={`https://app.altme.io/app/download?uri=${qrUrl}`}>Open
                    AltMe wallet</a>
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
