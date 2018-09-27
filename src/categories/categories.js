import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../widgets/containers/search';
import Media from '../playlist/components/media';

const Categories = (props) => {
    return (
        <div className="Categories">
            <Search/>
            {
                props.search.map((item) => {
                    return <Media key={item.id} {...item}/>
                })
            }
            { props.categories.map((item) => {
               return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item}/>
            })
            }
        </div>
    );
};

export default Categories;