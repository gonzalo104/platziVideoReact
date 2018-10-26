import React, { PureComponent } from 'react';
import './generic-page.css';


class NotFound extends PureComponent {

    handleBackClicj = () => {
        this.props.history.goBack();
    }
    handleForwardClick = () => {
        this.props.history.goForward();
    }

    handleRandomClick = () => {
        const random = Math.round(Math.random() * (10 - 1) + 1);
        this.props.history.push(`/videos?id=${random}`, {id: random});
    }

    render() {
        return (
            <div className="Page NotFound">
                <h1>404</h1>
                <h3 className="sadFace">:(</h3>
                <h2>No hemos encontrado la página que buscabas</h2> 
                <button className="Button" onClick={this.handleForwardClick}>
                    Ir ala siguiente ruta 
                </button>          
                <button className="Button" onClick={this.handleBackClicj}>
                    Ir ala ruta anterior
                </button>
                <button className="Button" onClick={this.handleRandomClick}>
                    Video random
                </button>
            </div>
        );
    }
}

export default NotFound;