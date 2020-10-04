import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
 
const ConversationsContext = React.createContext()

export const useConversations = () => useContext(ConversationsContext)

export const ConversationsProvider = ({children}) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])

    function createConversation(recipients){
        setConversations( prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }} >
            {children}
        </ConversationsContext.Provider>
    )
}