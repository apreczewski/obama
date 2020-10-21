import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import logoImg from '../../images/logo.svg';

import { Wrapper, Content, Logo, Main, Local, EnterApp } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logoImg} alt="Happy" />
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>visite orfanatos e mude o dia de muitas crianças</p>
        </Main>
        <Local>
          <strong>Alvorada</strong>
          <span>Rio Grande do Sul</span>
        </Local>
        <EnterApp to="/app"><FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" /></EnterApp>
      </Content>
    </Wrapper>
  );
}

export default LandingPage;