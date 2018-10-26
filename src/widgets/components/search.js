import React from 'react'
import './search.css';
import { Prompt } from 'react-router';

const Search = (props) => {
    return (
        <form action="" className="Search" onSubmit={props.handleSubmit}>
            <Prompt
                when    = {props.prompt}
                message = "¿Estas seguro de querrer dejar la pagina?"
            />
            <input ref={props.setRef} className="Search-input" name="search" placeholder="Busca tu video favorito" type="text"  onChange={props.handleChange} value={props.value}/>
        </form>
    )
}

export default Search