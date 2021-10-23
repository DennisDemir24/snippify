import {
  GET_SNIPPETS,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case GET_SNIPPETS:
            return {
                ...state,
                snippets: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}