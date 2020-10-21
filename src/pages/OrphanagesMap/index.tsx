import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import mapMarkerImg from '../../images/map-marker.svg';
import { Wrapper, SideBar, Hearder, Footer, CreateOrphanage } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Wrapper>
      <SideBar>
        <Hearder>
          <img src={mapMarkerImg} alt=""/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Hearder>
        <Footer>
          <strong>Alvorada</strong>
          <span>Rio Grande do Sul</span>
        </Footer>
      </SideBar>
      <Map
        center={[-30.0399769,-51.0853921]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </Map>
      <CreateOrphanage to="/">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Wrapper>
  );
}

export default OrphanagesMap;