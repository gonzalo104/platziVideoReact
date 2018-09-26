import React from 'react';
import Category from './category';
import './categories.css';

const Categories = (props) => {
    return (
        <div className="Categories">
            { props.categories.map((item) => {
               return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item}/>
            })
            }
        </div>
    );
};

export default Categories;