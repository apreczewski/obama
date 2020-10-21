import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import logObamna from '../../../images/logo_obama.svg';
import { Wrapper, MenuLeft, MenuRight, Logo, Description, 
    Title, SubTitle, Item } from './styles';

const Hearder: React.FC = () => {
  return (
    <Wrapper>
        <MenuLeft>
            <Logo src={logObamna} alt=""/>
            <Description>
                <Title>Obama Futebol Club</Title>
                <SubTitle>sub title</SubTitle>
            </Description>
        </MenuLeft>
        <MenuRight>
        <Item>
            <span>Home</span>
            <p>icon</p>
        </Item>
        <Item>
            <span>Home</span>
            <p>icon</p>
        </Item>
        <Item>
            <span>Socios</span>
            <p>icon</p>
        </Item>
        <Item>
            <span>Test1</span>
            <p>icon</p>
        </Item>
        <Item>
            <span>Test2</span>
            <p>icon</p>
        </Item>
        </MenuRight>
    </Wrapper>
  );
}

export default Hearder;