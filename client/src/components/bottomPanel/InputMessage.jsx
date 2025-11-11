import { useState } from "react";
import { v4 as uuid } from "uuid";
import { sendMessageToServer } from "../../socket/socketClient";

import { setCurrentChatId, storeMessage } from "../../store/chatSlice";
import { useSelector, useDispatch } from "react-redux"

export default function InputMessage() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch()
  let chatID = useSelector((state) => state.chat.currentChatID); {/* MANDATORY */}

  const sendMessage = () => {
    
    if(content.trim()) {
      const message = {
      role:'user',
      content: content.trim()
    };

    if (!chatID){ //if chat id doesn't exist, create a new one
      chatID = uuid();
      dispatch(setCurrentChatId(chatID));
    }

    // Redux Store - storing the message in a redux state
    dispatch(storeMessage({message, chatID}))

    // Call the function to send the message to the server
    sendMessageToServer({message, chatID}) // Socket IO
    setContent("")
    } else {
      console.log("Message content cannot be empty")
    }
  }

  const handleEnterPress = (e) => {
    if(e.key === 'Enter' && content.trim()){
      sendMessage();
    }
  }
  
  return (
    <div className="chat_box_panel">
        <input type="text" 
        value={content}
        onChange={(e) => setContent(e.target.value)} 
        onKeyDown={handleEnterPress}
        placeholder="Chat with this AI" 
        className="chat_box_input"/>
      
    </div>
  )
}
