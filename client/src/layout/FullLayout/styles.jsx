import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  padding: 30px 0;
      
  &&.mobile-container {
        ${props => props.theme.breakpoints.up('xs')} {
              display: block;
        }
      
        ${props => props.theme.breakpoints.up('sm')} {
              display: none;
        }
  }   
      
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .logo {
      width: 150px;
      height: auto;

      ${props => props.theme.breakpoints.up('sm')} {
        width: 350px;
        height: auto;
      }

      ${props => props.theme.breakpoints.up('md')} {
        width: 300px;
        height: auto;
      }
    }
  }
`;
