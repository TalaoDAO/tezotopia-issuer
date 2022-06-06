import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  .voucher-btn {
    background: #fbd400;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
    width: 100%;
    
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }

    ${props => props.theme.breakpoints.up('sm')} {
      width: 365px;
    }
  }
`;