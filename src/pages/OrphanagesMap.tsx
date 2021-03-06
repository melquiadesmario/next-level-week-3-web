import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarketImg from '../assets/map-marker.svg';

import mapIcon from '../utils/mapIcon';

function OrphanagesMap(){
    return(
        <div id='page-map'>
            <aside>
                <header>
                    <img src={ mapMarketImg } alt='Happy' />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                
                <footer>
                    <strong>São Caetano</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>
            
            <Map
                center={[-8.286029,-35.9689911]}
                zoom={ 15 }
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />*/}
                <TileLayer
                    url={ `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${ process.env.REACT_APP_MAPBOX_TOKEN }` }
                />

                <Marker
                    icon={ mapIcon }
                    position={[-8.286029,-35.9689911]}
                >
                    <Popup
                        className='map-popup'
                        closeButton={ false }
                        minWidth={ 240 }
                        maxWidth={ 240 }
                    >
                        Orfanato Caruaru
                        <Link to='/orphanages/1'>
                            <FiArrowRight size={ 20 } color='#FFF' />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to='/orphanages/create' className='create-orphanage'>
                <FiPlus size={ 32 } color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;