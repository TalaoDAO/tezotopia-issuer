import React from "react";
import { Box, Typography } from "@mui/material";

function MobileDashboard(props) {
  return (
    <div className="title-container title-container-mobile">
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', mx: 'auto', gap: '16px' }}>
        <Typography
          className={'title'}
          sx={{ color: '#fff'}}
        >
          Battle, Collect NFTs, and Claim Land in this Blockchain Space Adventure!
        </Typography>

        <img className="unit-img" src="/assets/img/unit-right-mobile.png" alt="" />
      </Box>

      <Box
        mt={4}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', mx: 'auto', gap: '16px'  }}>

        <img className="castel-img" src="/assets/img/castel_icon_mobile.png" alt="" />

        <Typography
          className={'title'}
          sx={{ color: '#FBD400' }}
        >
          15% discount on all NFT purchases*
        </Typography>
      </Box>
    </div>
  );
}

export default MobileDashboard;
