import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 10px;
  background: linear-gradient(180deg, #812ee8, #812ee857);
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 9px 0px #7452ad29;

  ${props => props.theme.breakpoints.up('sm')} {
    width: 365px;
  }
  
  .logo {
    width: 90px;
    height: auto;
  }
  
  .card-title {
    font-size: 32px;
    color: #f4f0fa;
    margin-bottom: 0;
  }
  
  .bg-left {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 200%;
    transform: translateX(50%) translateY(-25%);
    background: #0f031d73;
    z-index: 1;
    border-radius: 50%;
  }
`;