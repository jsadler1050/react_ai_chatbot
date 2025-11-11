import ChatBubble from "./ChatBubble"
import { useSelector } from "react-redux"

export default function ChatPanel() {
  const { currentChatID, chats, loading } = useSelector((state) => state.chat)
  const chat = chats.find(chat => chat.id === currentChatID) //when currentChatID exists, we get our response
  
  return (
    <>
      { chat?.messages.map((message, index) => (
          <ChatBubble key={index} data={message}/>
      ))}
      { loading && (<div className="loader"></div>)}
    </>
  )
}
