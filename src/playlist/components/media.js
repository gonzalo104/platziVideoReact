import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';
import {Link } from 'react-router-dom';

class Media extends PureComponent {
    
    state = {
        author: "Gonzalo Zavala Mendoza",
    }
  
    handleClick = event =>{
        this.props.openModal(this.props.id)
    }

   
    render() {
        return (
            <Link to={{
                pathname: '/videos',
                search  : `?id=${this.props.id}`,
                state   : {
                    modal: true,
                    id   : this.props.id
                }
            }}>
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-Cover">
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
            </Link>
        );
    }
}


Media.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string.isRequired,
    author: PropTypes.string,
    type  : PropTypes.oneOf(['video', 'audio']),
}

export default Media;