import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
 
const ConversationsContext = React.createContext()

export const useConversations = () => useContext(ConversationsContext)
