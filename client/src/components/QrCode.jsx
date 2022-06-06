import React from 'react';
import ReactQRCode from "react-qr-code";
import { Box } from '@mui/material';

const QrCode = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <ReactQRCode
        title="Download the App"
        value="test"
        size={220}
        level="H"
      />
    </Box>
  );
};

export default QrCode;