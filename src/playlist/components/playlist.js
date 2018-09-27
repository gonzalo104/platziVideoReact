import React from 'react';
import MediaContainer from '../conteiners/media';
import './playlist.css';

const Playlist = (props) => {                

        return (
            <div className="Playlist">            
                {
                    props.playlist.map((mediaId) => {
                        return <MediaContainer openModal={props.handleOpenModal} id={mediaId} key={mediaId}/>
                    })
                }                
            </div>
        );    
}

export default Playlist; 