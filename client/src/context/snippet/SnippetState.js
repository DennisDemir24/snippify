import React, { useReducer } from 'react'
import axios from 'axios'
import SnippetContext from './snippetContext'
import snippetReducer from './snippetReducer'
import {GET_SNIPPETS} from '../types'

const SnippetState = (props) => {
  const initialState = {
    snippets: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(snippetReducer, initialState)

  // Get snippets
   const getSnippets = async () => {
     try {
       const res = await axios.get('/api/snippets')
       dispatch({ type: GET_SNIPPETS, payload: res.data })
     } catch (error) {
       /* dispatch({ type: CONTACT_ERROR, payload: error.response.msg }) */
     }
   }

  // Add snippet
  

  // Delete Snippet


  // Update Snippet


  // Clear Snippets

  // Set Current Snippet
  /* const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  } */

  // Clear Current Snippet
  /* const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  } */

  // Filter Snippets
  /* const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  } */

  // Clear Filter
  /* const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  } */

  return (
    <SnippetContext.Provider
      value={{
        snippets: state.snippets,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getSnippets,
      }}
    >
      {props.children}
    </SnippetContext.Provider>
  )
}

export default SnippetState
