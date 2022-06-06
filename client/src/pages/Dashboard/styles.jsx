import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    .unit-img {
      display: none;

      ${props => props.theme.breakpoints.up('sm')} {
        display: block;
        width: 130px;
        height: auto;
      }

      ${props => props.theme.breakpoints.up('md')} {
        width: 200px;
      }

      ${props => props.theme.breakpoints.up('lg')} {
        width: 250px;
      }
    }

    .title {
      font-size: 42px;
      font-weight: bold;
      text-align: center;
      line-height: 1.125;
      text-shadow: 0 0 30px #7452ad;
      
      ${props => props.theme.breakpoints.up('md')} {
        font-size: 54px;
      }

      ${props => props.theme.breakpoints.up('lg')} {
        font-size: 64px;
      }
    }
  }
`;