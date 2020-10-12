import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

import mapMarketImg from '../assets/map-marker.svg';

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
            
            <div></div>

            <Link to='' className='create-orphanage'>
                <FiPlus size={ 32 } color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;