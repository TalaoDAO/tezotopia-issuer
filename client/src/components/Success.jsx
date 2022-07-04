import React from "react";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function Success({ isMembership }) {
  return (
    <Box sx={{ color: "#fff", textAlign: "center" }}>
      <img className="download-img" src="/assets/img/ic-succes.svg" alt="success-check" />
      <Typography fontSize={50} sx={{ fontWeight: 700 }}>
        Great !
      </Typography>
      <Typography fontSize={26} sx={{ fontWeight: 500 }}>
        {isMembership ? "You have now your membership card" : "You have now your voucher"}
      </Typography>
    </Box>
  );
}

Success.propTypes = {
  isMembership: PropTypes.bool.isRequired
};

export default Success;
