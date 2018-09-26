import React from 'react';
import PlayList from '../playlist/components/playlist.js';
import './category.css';
const Category = (props) => {
    return (
        <div className="Category">
        <p className="Category-title">{props.description}</p>
        <h2 className="Category-description">{props.title}</h2>                    
            <PlayList handleOpenModal={props.handleOpenModal} playlist={props.playlist} />                    
        </div>
    );
};

export default Category;