import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const SideBar = styled.div`
  width: 448px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between
`;

export const Hearder = styled.div`

  h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  z-index: 10;

  right: 48px;
  bottom: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  :hover {
    background: #17d6eb;
  }
`;
