import { createContext, useReducer } from 'react'

export const TicketsContext = createContext()

export const ticketsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return { 
        tickets: action.payload 
      }
    case 'CREATE_TICKETS':
      return { 
        tickets: [action.payload, ...state.tickets] 
      }
    default:
      return state
  }
}

export const TicketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ticketsReducer, { 
    tickets: null
  })
  
  return (
    <TicketsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TicketsContext.Provider>
  )
}