import styled from 'styled-components';
import landing from '../../images/landing.svg';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 700px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

`;
export const Logo = styled.img``;

export const Main = styled.div`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  
  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Local = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;
  
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd665;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
  cursor: pointer;

  :hover{
    background: #96feff;
  }
`;
