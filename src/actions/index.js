import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES, IS_LOADING} from '../actions_types/index';
export const openModal =  (mediaId) => {
    return {
        type   : OPEN_MODAL,
        payload: {
            mediaId: mediaId
        }
    }
}

export const closeModal =  () => {
    return {
        type: CLOSE_MODAL,
    }
}

export const searchEntities =  (query) => {
    return {
        type   : SEARCH_ENTITIES,
        payload: {query},
    }
}

export const searchAsyncEntities =  (query) => {
    return (dispatch) => {

        dispatch(isLoading(true));

        setTimeout(()=>{
            dispatch(isLoading(false));
            dispatch(searchEntities(query))            
        },5000)        
    }   
}


export const isLoading = (value) => {
    return {
        type   : IS_LOADING,
        payload: {
            value
        }
    }
}
